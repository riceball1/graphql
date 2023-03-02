import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: SoldOut
        inventory: Int
        stores: [Store]!
    }

    enum SoldOut {
        SOLDOUT
        ONSALE
    }

    type Store {
        store: String
    }

    type Query {
        getProduct(id: ID): Product
    }


    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: SoldOut
        inventory: Int
        stores: [StoreInput!]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`)

/*

You will need to define clearly what the mutation takes, in createProduct it takes an input with ProductInput type and returns Product type as output, this allows GraphQL to work properly and makes you think through the data

   type Mutation {
        createProduct(input: ProductInput): Product
    }


    To use the resolver, update Query with the following:
        type Query {
        getProduct(id: ID): Product
    }


*/


export default schema;