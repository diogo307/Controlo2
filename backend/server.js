require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const identityRoutes = require('./routes/identities')
const controlRoutes = require('./routes/controls')

// create express app
const app = express ()

//Middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

// routes
app.use ('/api/identities', identityRoutes)
app.use ('/api/controls', controlRoutes)

// Connect to db
mongoose.connect(process.env.Mongo_URI)
.then(()=>{
    console.log('connected to database')
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Listening on port', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})