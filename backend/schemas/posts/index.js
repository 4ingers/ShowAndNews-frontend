const fs = require('fs')
const path = require('path')
const { GraphQLDateTime } = require('graphql-iso-date')

const PostService = require('../../api/posts')
const {errorHandler} = '../../api/utils'

const getPostsWithAuthors = cb => 
  async(parent, args, ctx, info) => {
    const posts = await cb(args, parent)
      .catch(errorHandler)

    if (!posts.length) return []

    const authors = await PostService.getPostsAuthors(
      [...new Set(posts.map(({author_id}) => author_id))]
    )

    const authorMap = authors.reduce((map, author) => {
      map[author.id] = `${author.first_name} ${author.last_name}`
      return map
    }, {})

    return posts.map(({cat_name, tags_names, author_id, ...rest}, index) => ({
      tags: tags_names.split(','),
      author: authorMap[author_id],
      category: cat_name,
      ...rest
    }))
  }

module.exports = {
  resolvers: {
    DateTime: GraphQLDateTime,
    Query: {
      getPostsByType: getPostsWithAuthors(
        async ({type}) => await PostService.getPosts(type)
      ),
      getPostsByCategory: getPostsWithAuthors(
        async({category_id}) => await PostService.getPosts('default', category_id)
      )      
    }
  },
  schema: fs.readFileSync(
    path.resolve(
      __dirname,
      './posts-schema.graphql'
    )
  ).toString()
}