# Full Stack Applications with GraphQL

[educative.io tutorial](https://www.educative.io/courses/full-stack-applications-with-graphql)

## GraphQL Backend Setup

- `npm install apollo-server`
- `npm install --save-dev nodemon`
- Apollo server runs on `localhost:4000/graphql`

The backend uses MongoDB
    - The lesson includes a Docker Compose file that starts two containers:
        - mongo: A database server that will handle all read and write operations.
        - mongo-express: A web-based MongoDB client that interacts with our database.
    - This starts a database server and a web dashboard that creates users and a database for our project. After a few seconds, we can go to this URL to get access to the created database: http://localhost:8081/

    `docker-compose up`
    To access the database, we need the following credentials:
    Username: `user` Password: `pass`

- ^ since the above wasn't working I was able to use the [mongo-seeding-cli](https://www.npmjs.com/package/mongo-seeding-cli) and the already setup mongodb command to seed the mongodb database locally, this requires prior having studio t3 or mongo compass setup to be able to see the local mongodb

- includes ` npm i mongoose` library to interact with nodejs application
- includes `npm i pino pino-pretty` -- output readable and professional looking logs
- seeding database `npm i -D mongo-seeding`


## Returning Data from Database

Here is an example of returning data from mongodb using mongoose:

```javascript
productsByAuthor: async (_, { authorName }) => {
            const author = await User.findOne({ userName: authorName })

            return Product.find({authorId: author._id}).exec({})
```


## Mutations

GraphQL mutations are operations that allow you to modify data on the server-side, such as creating, updating, or deleting data. Unlike queries that only fetch data, mutations modify data and return a result.

In a GraphQL schema, mutations are defined in the same way as queries, but with the `mutation` keyword instead of `query`. Mutations are composed of a name, input arguments, and a return type, just like queries. However, unlike queries, mutations are executed sequentially and have a side effect on the data store.

To execute a mutation, you specify the mutation name and the input arguments, which represent the data you want to modify. The server then applies the mutation to the data store and returns a result, typically including the modified data.

Overall, GraphQL mutations provide a powerful and flexible way to modify data on the server-side, while also providing a consistent and type-safe API for clients to use.

Example of a mutation:

```javascript
Mutation: {
  createProduct: async (_, { input } ) => {
    const author = await User.findOne({userName: "ellen"})
    return Product.create({
      name: input.name,
      description: input.description,
      url: input.url,
      numberOfVotes: 0,
      publishedAt: Date.now(),
      authorId: author._id,
      categoriesIds: input.categoriesIds,
    })
  }
}
```

