const mongoose = require('mongoose');
const logger = require('./logger.js');

// Connection URL 
const mongoDB = 'mongodb://127.0.0.1:27017/products-db';
mongoose.connect(mongoDB)

const db = mongoose.connection

// called when our application conects to the database
db.once('open', () => {
    logger.info('connected to a db')
})

// called on mongoDB connection error
db.on('error', () => {
    logger.error('mongodb error')
})