const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let afieldsSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    radio: {
        type: String
    },
    message: {
        type: String
    },
    selectedValue: {
        type: String
    },
    selectedMultiValue: {
        type: Array
    },
    checkValues: {
        type: Array
    },
    states: {
        type: String
    },
    city: {
        type: String
    },
    conditionalValue: {
        type: String
    }
}, {
    collection: 'all_fields'
})

module.exports = mongoose.model('AllFields', afieldsSchema)