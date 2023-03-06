const { ApolloServer } = require('apollo-server');
const { readSchema } = require('./schema');
const { resolvers } = require('./resolvers');

const typeDefs = readSchema()

const server = new ApolloServer({
    typeDefs, // schema for GraphQL API
    resolvers, // implementation of queries and types
})

server.listen().then(() => {
    console.log('Listening on PORT 4000')
})