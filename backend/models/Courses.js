const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema({
    name: {
        type: String
    },
    courseType: {
        type: String
    },
    detail: {
        type: String
    },
}, {
    collection: 'courses'
})

module.exports = mongoose.model('Course', courseSchema)