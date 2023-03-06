const {readFileSync} = require('fs')

const readSchema = () => {
    return readFileSync('src/schema.graphql').toString('utf-8')
}

module.exports = {
    readSchema: readSchema
}