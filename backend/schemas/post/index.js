const fs = require('fs')
const path = require('path')
const { GraphQLDateTime } = require('graphql-iso-date')

const PostService = require('../../api/post')
const { errorHandler } = '../../api/utils'


const getPostsWithAuthors = cb => {
  return async (parent, args, ctx, info) => {
    const posts = await cb(args, parent)
      .catch(errorHandler)

    if (!posts.length) return []

    const authors = await PostService.getPostsAuthors(
      [...new Set(posts.map(({ author_id }) => author_id))]
    )

    const authorMap = authors.reduce((map, author) => {
      map[author.id] = `${author.first_name} ${author.last_name}`
      return map
    }, {})

    return posts.map(({ cat_name, tags_names, author_id, ...rest }, index) => ({
      tags: tags_names ? tags_names.split(',') : [],
      author: authorMap[author_id],
      category: cat_name,
      ...rest
    }))
  }
}

const getPost = cb => {
  return async (parent, args, ctx, info) => {
    const post = await cb(args, parent)
      .catch(errorHandler)

    if (!post) return null

    const { cat_name, tags_names, author_id, ...rest } = post

    return {
      tags: tags_names ? tags_names.split(',') : [],
      author: author_id,
      category: cat_name,
      ...rest
    }
  }
}


module.exports = {
  resolvers: {
    DateTime: GraphQLDateTime,
    Query: {
      getPostCount: (_, __, ___, ____) => PostService.getPostCount(),
      getPostBySlug: getPost(
        async ({ postSlug }) => await PostService.getPostBySlug(postSlug)
      ),
      getPostsByCategory: getPostsWithAuthors(
        async ({ catSlug, offset, limit }) => await PostService.getPostsByCategory(catSlug, offset, limit)
      ),
      getPostsByTag: getPostsWithAuthors(
        async ({ tagSlug, offset, limit }) => await PostService.getPostsByTag(tagSlug, offset, limit)
      ),
      getPostsByType: getPostsWithAuthors(
        async ({ type, limit }) => await PostService.getPostsByType(type, limit)
      ),
    }
  },
  schema: fs.readFileSync(
    path.resolve(
      __dirname,
      './post-schema.graphql'
    )
  ).toString()
}