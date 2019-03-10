const { GraphQLServer } = require("graphql-yoga")
const _ = require("lodash")
const morgan = require("morgan")
const axios = require("axios")
const port = process.env.PORT || 3000
const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:4000"

const resolvers = {
  Query: {
    users: () =>
      axios.get(`${apiEndpoint}/api/users`).then(({ data }) => data.data),
    user: (_, { id }) => {}
  }
  // Mutation: {}
}

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
})

server.express.use(morgan("combined"))
server.start({ port }, () =>
  console.log(`Graph#QL server is running on http://localhost:${port}`)
)
