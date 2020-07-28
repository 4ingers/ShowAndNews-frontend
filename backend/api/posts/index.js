const db = require('../../database/mysql')
const {errorHandler} = require('../utils')

module.exports = {
  getPost: async(id) => 
    await db
      .select('*')
      .from('posts')
      .where({ id })
      .catch(errorHandler),

  getPosts: async(type, category_id) => {
    let query = db.select(
      'posts.id',
      'posts.description',
      'categories.id as cat_id',
      'categories.name as cat_name',
      'posts.author_id',
      'posts.title',
      'posts.image',
      'posts.created_at',
      'posts.updated_at',
      'posts.path',
      db.raw('GROUP_CONCAT(tags.name) as tags_names'),
      db.raw('GROUP_CONCAT(tags.id) as tags_ids')      
    )
    .from('posts', 'categories')
    .leftJoin('post_category', 'posts.id', 'post_category.post_id')
    .leftJoin('categories', 'post_category.category_id', 'categories.id')
    .leftJoin('post_tags', 'posts.id', 'post_tags.post_id')
    .leftJoin('tags', 'post_tags.tag_id', 'tags.id')
    .where({active: 1})
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


    
    return query.then(data => {
      //// TODO: === FOR TAGS!!! ===
      // if (category_id) {
      //   return data.filter(post =>
      //     post.cat_ids
      //       .split(',')
      //       .includes(category_id.toString())
      //   )
      // }
      if (category_id) {
        return data.filter(post => post.cat_id === category_id)
      }
      return data
    }).catch(errorHandler)
  },

  getPostsAuthors: async(ids) => 
    await db.select('*')
      .from('users')
      .whereIn('id', ids)
      .catch(errorHandler)
}