const mongoose = require('mongoose')
const Product = require('./models/Product.js')
const Category = require('./models/Category.js')
const User = require('./models/User.js')

// const { productsData, usersData, categoriesData } = require('./data');


const resolvers = {
    Query: {
        appName: () => 'ProductHunt Clone',
        allProducts: () => {
            // Update the reading from memory to instead read from the DB
            // return productsData

            return Product.find({}).exec()
        },
        productsByAuthor: async (_, { authorName }) => {
            const author = await User.findOne({ userName: authorName })

            return Product.find({authorId: author._id}).exec({})

            // const user = usersData.find(user => user.userName === authorName)
            // return productsData.filter(product => product.authorId === user.id)
        },
        // productsByCategory: (_, {slug}) => {
        //     const category = categoriesData.find(category => category.slug === slug)

        //     return productsData.filter(product => product.categoriesIds.includes(category.id))

        // },
        /* Update productsByCategory


        Able to run query:

        query {
        productsByCategory(slug: "api") {
            name
            description
        }
        }

        */
        productsByCategory: async (parent, { slug }) => {
            const category = await Category.findOne({ slug })
            return Product.find({ categoriesIds: category._id }).exec({})
        }


    },

    // Specifies how to get fields for the "Product" type
    Product: {
        author: async (product, args) => {
            // return usersData.find(user => user.id === product.authorId)

            return (await User.findById(product.authorId))
        },
        categories: async (product) => {
            // const result = product.categoriesIds.map(categoryId => {
            //     return categoriesData.find(category => category.id === categoryId)
            // })
            // return result;


            // Updated with getting from database
            const allIds = product.categoriesIds
            return (await Category.find().where('_id')).includes(allIds)
        },
        publishedAt: (product) => {
            return product.publishedAt.toISOString()
        }
    }
}


module.exports = {
    resolvers
}