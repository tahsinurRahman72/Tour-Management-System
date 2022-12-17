const express = require('express')
const route = express.Router()
const regModel = require('../../models/regUser')

route.post('/register_user', async(req,res)=>{

    const data = req.body;
  
    // Check if the user already exists
    regModel.find({ Email: data.Email }, (err, user) => {
      if (err) {
        return res.status(500).send({ message: 'Error finding user' });
      }
      // console.log(data.Email)
      console.log(user)
      if (user) {
        return res.status(400).send({ message: 'User already exists' });
      }
  
      // Create a new user if one doesn't exist
      const newUser = new regModel(req.body)
      newUser.save((error) => {
        if (error) {
          return res.status(500).send({ message: 'Error saving user' });
        }
        res.send({ 
            message: 'User registered successfully',
            newUser });
      });
    }).count();
  });

module.exports = route
