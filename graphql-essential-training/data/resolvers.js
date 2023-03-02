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

import { reject } from 'lodash';
import { Product } from './dbConnectors';

export const resolvers = {
    getProduct: ({ id }) => {
        return new Promise((resolve) => {
            Product.findById({ _id: id }).then((product) => {
                resolve(product)

            })
        })
            .catch(err => console.log(err))
    },
    // non-persistent way of getting products
    // getProducts: ({id}) => {
    //     return new Product(id, productDatabase[id])
    // },
    // mutation

    createProduct: ({ input }) => {
        const newProduct = new Product({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores
        })

        newProduct.id = newProduct._id

        return new Promise((resolve) => {
            newProduct.save().then(() => {
                resolve(newProduct)
            })
                .catch((err) => console.log(err))
        })
    },
    updateProduct: ({ input }) => {
        return new Promise((resolve) => {
            Product.findOneAndUpdate({ _id: input.id }, input, { new: true })
                .then((product) => {
                    resolve(product)
                })
                .catch((err) => console.log(err))
        })
    },

    // non-db approach to creating product
    // createProduct: ({ input }) => {
    //     let id = require('crypto').randomBytes(10).toString('hex')
    //     productDatabase[ id ] = input;
    //     return new Product(id, input)
    // }
    deleteProduct: ({ id }) => {
        return new Promise((resolve) => {
            Product.findByIdAndRemove({ _id: id })
                .then(() => {
                    resolve('Successfully deleted')
                })
                .catch(err => console.log(err))
        })
    },
};