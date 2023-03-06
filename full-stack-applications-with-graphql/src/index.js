const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        appName: String
    }
`

const resolvers = {
    Query: {
        appName: () => 'ProductHunt Clone'
    }
}

const server = new ApolloServer({
    typeDefs, // schema for GraphQL API
    resolvers, // implementation of queries and types
})

server.listen().then(() => {
    console.log('Listening on PORT 4000')
})