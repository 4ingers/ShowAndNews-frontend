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

    return posts.map(({ tags_name, tags_slug, author_id, created_at, updated_at, ...rest }) => ({
      tagsName: tags_name ? tags_name.split(',') : [],
      tagsSlug: tags_slug ? tags_slug.split(',') : [],
      author: authorMap[author_id],
      createdAt: created_at,
      updatedAt: updated_at,
      ...rest
    }))
  }
}


const getPost = cb => {
  return async (parent, args, ctx, info) => {
    const post = await cb(args, parent)
      .catch(errorHandler)
    if (!post) return null

    const { tags_name, tags_slug, author_id, created_at, updated_at, ...rest } = post

    return {
      tagsName: tags_name ? tags_name.split(',') : [],
      tagsSlug: tags_slug ? tags_slug.split(',') : [],
      author: author_id,
      createdAt: created_at,
      updatedAt: updated_at,
      ...rest
    }
  }
}


module.exports = {
  resolvers: {
    DateTime: GraphQLDateTime,
    Query: {
      getPostsByCategoryCount: (_, { catSlug }, ___, ____) => PostService.getPostsByCategoryCount(catSlug),
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