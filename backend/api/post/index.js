const db = require('../../database/mysql')
const { errorHandler } = require('../utils')

module.exports = {
  getPost: async (id) =>
    await db
      .select('*')
      .from('posts')
      .where({ id })
      .catch(errorHandler),

  getPostCount: async () => 
    await db
      .count('id as count')
      .from('posts')
      .where({
        active: 1,
      })
      .first()
      .then(data => data.count)
      .catch(errorHandler),

  getPostBySlug: async (postSlug) => 
    await db.select(
      'posts.id',
      'posts.title',
      'posts.description',
      'posts.content',
      'posts.author_id',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'categories.slug as cat_slug',
      'posts.slug',
      db.raw('GROUP_CONCAT(tags.name) as tags_names'),
      db.raw('GROUP_CONCAT(tags.id) as tags_ids')
    )
      .from('posts', 'categories')
      .leftJoin('post_category', 'posts.id', 'post_category.post_id')
      .leftJoin('categories', 'post_category.category_id', 'categories.id')
      .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
      .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
      .where({
        active: 1
      })
      .andWhereRaw(`MATCH (posts.slug) AGAINST ('${postSlug}')`)
      .groupBy('posts.id')
      .first()
      // .then(post => post)
      .catch(errorHandler)
  ,


  getPostsByCategory: async (categorySlug, offset, limit) => 
    await db.select(
      'posts.id',
      'posts.title',
      'posts.description',
      'posts.content',
      'posts.author_id',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'categories.slug as cat_slug',
      'posts.slug',
      db.raw('GROUP_CONCAT(tags.name) as tags_names'),
      db.raw('GROUP_CONCAT(tags.id) as tags_ids')
    )
      .from('posts', 'categories')
      .leftJoin('post_category', 'posts.id', 'post_category.post_id')
      .leftJoin('categories', 'post_category.category_id', 'categories.id')
      .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
      .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
      .where({
        active: 1,
      })
      .andWhere('categories.slug', 'like', `${categorySlug}`)
      .groupBy('posts.id')
      .offset(offset)
      .limit(limit)
      .catch(errorHandler)
  ,

  getPostsByTag: async (tagSlug, offset, limit) => 
    await db.select(
      'posts.id',
      'posts.title',
      'posts.description',
      'posts.content',
      'posts.author_id',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'categories.slug as cat_slug',
      'posts.slug',
      //! Нет смысла: выводится только искомый
      db.raw('GROUP_CONCAT(tags.name) as tags_names'),
      db.raw('GROUP_CONCAT(tags.id) as tags_ids')
    )
      .from('posts', 'categories', 'tags')
      .leftJoin('post_category', 'posts.id', 'post_category.post_id')
      .leftJoin('categories', 'post_category.category_id', 'categories.id')
      .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
      .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
      .where({ active: 1 })
      .andWhereRaw(`MATCH (tags.slug) AGAINST ('${tagSlug}')`)
      .groupBy('posts.id')
      .catch(errorHandler)
  ,

  getPostsByType: async (type, limit) => {
    let query = db.select(
      'posts.id',
      'posts.title',
      'posts.description',
      'posts.content',
      'posts.author_id',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'categories.slug as cat_slug',
      'posts.slug',
      db.raw('GROUP_CONCAT(tags.name) as tags_names'),
      db.raw('GROUP_CONCAT(tags.id) as tags_ids')
    )
      .from('posts', 'categories')
      .leftJoin('post_category', 'posts.id', 'post_category.post_id')
      .leftJoin('categories', 'post_category.category_id', 'categories.id')
      .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
      .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
      .where({ active: 1 })
      .groupBy('posts.id')

    return await {
      slider: () => query
        .orderBy('created_at', 'desc')
        .limit(limit),
      default: () => query
    }[type]()
      .catch(errorHandler)
  },



  getPostsAuthors: async (ids) =>
    await db.select('*')
      .from('users')
      .whereIn('id', ids)
      .catch(errorHandler)
}