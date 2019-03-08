const { GraphQLServer } = require("graphql-yoga")
const _ = require("lodash")
const morgan = require("morgan")
const PORT = process.env.PORT || 4000

const resolvers = {
  Query: {
    user: (_, { id }) => {}
  }
  // Mutation: {}
}

const server = new GraphQLServer({
  port: PORT,
  typeDefs: "./schema.graphql",
  resolvers
})

server.express.use(morgan("combined"))
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:${PORT}`)
)
