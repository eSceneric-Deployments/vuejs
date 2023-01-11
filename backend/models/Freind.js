const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let friendSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
}, {
    collection: 'friend_list'
})

module.exports = mongoose.model('Friend', friendSchema)