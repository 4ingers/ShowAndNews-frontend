const db = require('../../database/mysql')
const { errorHandler } = require('../utils')


const queryPosts = db.select(
  'posts.id',
  'posts.title',
  'posts.description',
  'posts.content',
  'posts.author_id',
  'posts.image',
  'posts.created_at',
  'posts.updated_at',
  'categories.name as category',
  'categories.slug as category_slug',
  'posts.slug',
  db.raw('GROUP_CONCAT(tags.name) as tags_name'),
  db.raw('GROUP_CONCAT(tags.slug) as tags_slug'),
)
  .from('posts')
  .leftJoin('categories', 'posts.category_id', 'categories.id')
  .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
  .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
  .where({ active: 1 })
  .groupBy('posts.id')


module.exports = {
  getPost: async (id) =>
    await db
      .select()
      .from('posts')
      .where({ id })
      .catch(errorHandler),

  getPostsByCategoryCount: async (categorySlug) =>
    await db
      .count('posts.id as count')
      .from('posts')
      .leftJoin('categories', 'posts.category_id', 'categories.id')
      .where({ active: 1 })
      .andWhere('categories.slug', `${categorySlug}`)
      .first()
      .then(data => data.count)
      .catch(errorHandler),

  getPostBySlug: async (postSlug) =>
    await queryPosts.clone()
      .andWhereRaw(`MATCH (posts.slug) AGAINST ('${postSlug}')`)
      .first()
      .catch(errorHandler),

  getPostsByCategory: async (categorySlug, offset, limit) =>
    await queryPosts.clone()
      .andWhere('categories.slug', `${categorySlug}`)
      .limit(limit)
      .offset(offset)
      .catch(errorHandler),

  getPostsByTag: async (tagSlug, offset, limit) => {
    const subquery = await db.select('post_id as id')
    .from('tags')
    .leftJoin('post_tags', 'tags.id', 'post_tags.tag_id')
    .whereRaw(`MATCH (tags.slug) AGAINST ('${tagSlug}')`)

    const postIds = subquery.map(data => data.id)

    return await queryPosts.clone()
      .andWhere('posts.id', 'in', postIds)
      .limit(limit)
      .offset(offset)
      .catch(errorHandler)
  },

  getPostsByType: async (type, limit) => 
    await {
      slider: () => queryPosts.clone()
        .orderBy('created_at', 'desc')
        .limit(limit),
      default: () => queryPosts.clone()
    }[type]()
      .catch(errorHandler),


  getPostsAuthors: async (ids) =>
    await db.select()
      .from('users')
      .whereIn('id', ids)
      .catch(errorHandler),


  // getPostIdsByTag: async(tagSlug) =>
  //   await db.select('post_id')
  //     .from('tags')
  //     .whereRaw(`MATCH (tags.slug) AGAINST ('${tagSlug}')`)
  //     .catch(errorHandler)
}