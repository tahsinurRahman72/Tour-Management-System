const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const regUser = new Schema ({
    FirstName: String,
    LastName: String,
    PhoneNumber: String,
    Email: String,
    Password: String,
}, {collection: 'users'})

module.exports = mongoose.model('regUser', regUser)