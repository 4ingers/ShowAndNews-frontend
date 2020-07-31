const postsSchema = require('./post')

const resolvers = [
  postsSchema.resolvers
]

const typeDefs = [
  postsSchema.schema
]

module.exports = {
  resolvers,
  typeDefs
}