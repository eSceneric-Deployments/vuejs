const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mstepSchema = new Schema({
    gender: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    zipCode: {
        type: Number
    },
    city: {
        type: String
    },
    birthDay: {
        type: Date
    },
    pinCode: {
        type: Number
    },
    eMail: {
        type: String
    }
}, {
    collection: 'multi_step'
})

module.exports = mongoose.model('MultiStep', mstepSchema)