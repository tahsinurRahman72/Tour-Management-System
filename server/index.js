require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session');
var cors = require('cors')

app.use(session({
    secret: 'adventure awaits',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/create-package', require('./routes/api/createPackage'))
app.use('/view-package', require('./routes/api/viewPackage'))
app.use('/view-package-by-id', require('./routes/api/viewPackageById'))
app.use('/delete-package', require('./routes/api/deletePackage'))
app.use('/leave-a-review', require('./routes/api/createReview'))

app.use('/register', require('./routes/api/registerUser'))
app.use('/login', require('./routes/api/loginUser'))
app.use('/logout', require('./routes/api/logOut'))
app.use('/book-package', require('./routes/api/bookTourPackage'))

mongoose.connect(
    process.env.DB_CONNECT_STRING, 
    { useNewUrlParser: true, useUnifiedTopology: true},
    (req,res) =>{
        console.log('Connected to database')
    })
    var db = mongoose.connection;
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})