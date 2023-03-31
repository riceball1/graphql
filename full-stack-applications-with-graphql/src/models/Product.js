// imports the Mongoose package into the current file.
const mongoose = require('mongoose');

// defines a variable Schema that references the Mongoose Schema class
const Schema = mongoose.Schema;

// defines a new schema for a product using the Schema class
const ProductSchema = new Schema({
    name: String,
    description: String,
    url: String,
    numberOfVotes: Number,
    publishedAt: Date,
    authorId: Schema.Types.ObjectId,
    categoriesIds: [Schema.Types.ObjectId]
})


// exports a Mongoose model for the product schema defined above, called Product. The model can be used to interact with the corresponding MongoDB collection in the database.
module.exports = mongoose.model('Product', ProductSchema)