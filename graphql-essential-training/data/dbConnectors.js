import mongoose from "mongoose";


// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/widgets', {
    useNewUrlParser: true
})

// create schema 

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    soldout: { type: String },
    inventory: { type: Number },
    stores: { type: Array },
})

// passsing the database into a model and using the schema
const Products = mongoose.model('products', ProductSchema)

export {Products}
