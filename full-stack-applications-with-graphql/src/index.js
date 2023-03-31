const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { readSchema } = require('./schema');
const { resolvers } = require('./resolvers');
const logger = require('./logger.js')
const Product = require('./models/Product.js');
const mongoose = require('./mongo');

const typeDefs = readSchema()

const server = new ApolloServer({
  typeDefs, // schema for GraphQL API
  resolvers, // implementation of queries and types
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ] // used to run local graphql explorer
})

// async function test() {
//     const res = await Product.find({}).exec()
//     logger.info(`Result: ${JSON.stringify(res)}`)
//   }

//   test()



server.listen().then(() => {
  console.log('Listening on PORT 4000')
})