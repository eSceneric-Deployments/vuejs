const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    item: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
}, {
    collection: 'orders'
})

module.exports = mongoose.model('Orders', orderSchema)