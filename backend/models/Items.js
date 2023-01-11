const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
    stock_item: {
        type: String
    },
    description: {
        type: String
    },
    instock: {
        type: Number
    },
}, {
    collection: 'Items'
})

module.exports = mongoose.model('Items', itemSchema)