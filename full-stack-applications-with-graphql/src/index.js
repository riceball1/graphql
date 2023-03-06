const { ApolloServer } = require('apollo-server');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
const { readSchema } = require('./schema');
const { resolvers } = require('./resolvers');

const typeDefs = readSchema()

const server = new ApolloServer({
    typeDefs, // schema for GraphQL API
    resolvers, // implementation of queries and types
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ] // used to run local graphql explorer
})

server.listen().then(() => {
    console.log('Listening on PORT 4000')
})