const { productsData, usersData } = require('./data');

const resolvers = {
    Query: {
        appName: () => 'ProductHunt Clone',
        allProducts: () => {
            return productsData
        }
    },

    // Specifies how to get fields for the "Product" type
    Product: {
        author: (product) => {
            return usersData.find(user => user.id === product.authorId)
        }
    }
}


module.exports = {
    resolvers
}