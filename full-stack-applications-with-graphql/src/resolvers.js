const { productsData, usersData, categoriesData } = require('./data');


const resolvers = {
    Query: {
        appName: () => 'ProductHunt Clone',
        allProducts: () => {
            return productsData
        },
        productsByAuthor: (_, {authorName}) => {
            const user = usersData.find(user => user.userName === authorName)
            return productsData.filter(product => product.authorId === user.id)
        },
        productsByCategory: (_, {slug}) => {
            const category = categoriesData.find(category => category.slug === slug)

            return productsData.filter(product => product.categoriesIds.includes(category.id))

        }

    },

    // Specifies how to get fields for the "Product" type
    Product: {
        author: (product) => {
            return usersData.find(user => user.id === product.authorId)
        },
        categories: (product) => {
            const result = product.categoriesIds.map(categoryId => {
                return categoriesData.find(category => category.id === categoryId)
            })
            return result;
        }
    }
}


module.exports = {
    resolvers
}