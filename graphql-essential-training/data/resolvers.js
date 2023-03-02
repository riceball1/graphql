// query and mutations
// class Product {
//     constructor(id, { name, description, price, inventory, soldout, stores }) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.price = price;
//         this.soldout = soldout;
//         this.inventory = inventory;
//         this.stores = stores;
//     }
// }

// mock database
// const productDatabase = {}

import { Products } from './dbConnectors';

export const resolvers = {
    getProduct: ({id}) => {
        return Promise((resolve) => {
            Products.findById({_id: id}, (err, product) => {
                if (err) reject(err)
                else resolve(product)
            })
        })
    },
    // non-persistent way of getting products
    // getProducts: ({id}) => {
    //     return new Product(id, productDatabase[id])
    // },
    // mutation
    createProduct: ({ input }) => {
        // let id = require('crypto').randomBytes(10).toString('hex')
        // productDatabase[ id ] = input;
        // return new Product(id, input)
    }
}