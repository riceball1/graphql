# GraphQL Essential Training

Linkedin Tutorial [link](https://www.linkedin.com/learning/graphql-essential-training-14933112)

## About
GraphQL a query language for your API. It's designed to minimize call to the server and get exactly what you request

## Setup
- vscode IDE
- vscode extension - graphQL 
- node server

## Notes
- Query
    - used to read or fetch values
- Mutations
    - used to write or post values
- Resolvers
    - a function or method that resolves a value for a type or field within a schema. A resolver is the key architectural component that connects GraphQL fields, graph edges, queries, mutations, and subscriptions to their respective data sources and micro-services.
- Scalar Types
    - ID, String, Boolean, Float, Int
- Enumeration Types
  - - Enumeration type or commonly call enums, is a special scale type that allows you to define a specific set of data that field takes and restrict the input to what you list in the enum type.

## Example Queries

This is an example of a mutation 
```
mutation {
  createProduct(input: {
    name: "widget4",
    description: "some widget",
    price: 34.99,
    soldout: false,
    stores: [{store:"LA"}, {store:"CA"}],
    
  }) {
    price
    name
  }
}

\\ response:

{
  "data": {
    "createProduct": {
      "price": 34.99,
      "name": "widget4"
    }
  }
}
```