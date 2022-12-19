const express = require('express')
const route = express.Router()
const bookPackage = require('../../models/bookModel')

route.post('/book-this-tour', async(req,res)=>{
    try{
        const bookedPackage = new bookPackage(req.body)
        await bookedPackage.save()
        res.send(bookedPackage)
    } catch (err) {
        res.send({
            message: err
        })
    }
})

module.exports = route