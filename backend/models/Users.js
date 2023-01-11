const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    course: {
        type: String
    },
}, {
    collection: 'users'
})

module.exports = mongoose.model('Users', userSchema)