const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema
let Detail = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number 
    },
    gender: {
        type: String 
    },
    phoneNumber: {
        type: Number
    }
}, {
    collection: 'details'
})

module.exports = mongoose.model('Detail', Detail)
