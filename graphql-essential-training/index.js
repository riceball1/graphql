import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import schema from './schema'


const app = express()
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('GraphQL')
})


// initial graphql 
const root = resolvers;

// 
// {
//     product: () => {
//         return {
//             "id": 124508,
//             "name": "widget",
//             "description": "Beautiful widget",
//             "price": 24.99,
//             "soldout": false,
//             "stores": [ { store: "San Francisco" }, { "store": "Los Angeles" } ],
//         }
//     },
//     // mutation
//     createProduct: ({ input }) => {
//         let id = require('crypto').randomBytes(10).toString('hex')
//         productDatabase[ id ] = input;
//         return new Product(id, input)
//     }
// }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))


app.listen(PORT, () => {
    console.log(`Running server on localhost:${PORT}/graphql`)
})