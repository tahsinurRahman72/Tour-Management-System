const express = require('express')
const route = express.Router()
const logModel = require('../../models/logUser')

route.post('/login-user', async(req,res)=>{
    const data = req.body

    try {
        logModel.findOne({Email: data.Email, Password: data.Password}, (err, user) => {
            if(user) {
                console.log('User logged in successfully')
                // Create a session for the user
                // req.session.user = user;
                // res.json({ success: true });
                res.send({ 
                    message: 'User logged in successfully',
                    user });
                // Return a response indicating that the login was successful
            }
            else {
                // Return a response indicating that the login was unsuccessful
                // res.json({ success: false });
                return res.status(500).send({ message: 'Error finding user' });  
            }
        })
    }
    catch(err) {
        res.send(err)
    }
})

module.exports = route
