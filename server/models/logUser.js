const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logUser = new Schema({
    Email: String,
    Password: String
}, {collection: 'users'})

module.exports = mongoose.model('logUser', logUser)