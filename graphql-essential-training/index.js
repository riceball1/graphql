import express from 'express'


const app = express()
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('GraphQL')
})

app.listen(PORT, () => {
    console.log(`Running server on localhost:${PORT}/graphql`)
})