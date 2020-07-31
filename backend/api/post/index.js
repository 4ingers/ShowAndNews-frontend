const db = require('../../database/mysql')
const { errorHandler } = require('../utils')

module.exports = {
  getPost: async (id) =>
    await db
      .select('*')
      .from('posts')
      .where({ id })
      .catch(errorHandler),

  getPosts: async (type, slug) => {
    let query = db.select(
      'posts.id',
      'posts.description',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'categories.slug as cat_slug',
      'posts.author_id',
      'posts.title',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
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



    query = {
      trending: () => query
        .orderBy('created_at', 'desc'),

      featured: () => query
        .orderBy('created_at', 'desc'),

      recent: () => query
        .orderBy('created_at', 'desc')
        .limit(5),

      default: () => query
    }[type || 'default']()

    return query.then(
      data => {
        return slug ? data.filter(post => post.cat_slug === slug) : data
      }
      //// TODO: === FOR TAGS!!! ===
      // if (/* query param */ tag_id) {
      //   return data.filter(post =>
      //     post.tags_ids
      //       .split(',')
      //       .includes(tag_id.toString())
      //   )
      // }
    ).catch(errorHandler)
  },

  getPostsAuthors: async (ids) =>
    await db.select('*')
      .from('users')
      .whereIn('id', ids)
      .catch(errorHandler)
}