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