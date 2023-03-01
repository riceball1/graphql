import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'


const app = express()
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('GraphQL')
})

// initial graphql 
const root  = { product: () => {
    return {
        "id": 124508,
        "name": "widget",
        "description": "Beautiful widget",
        "price": 24.99,
        "soldout": false,
    }
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))


app.listen(PORT, () => {
    console.log(`Running server on localhost:${PORT}/graphql`)
})