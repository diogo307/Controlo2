require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const identityRoutes = require('./routes/identities')
const controlRoutes = require('./routes/controls')
const mqtt = require('mqtt')

// create express app
const app = express ()

//Middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

// MQTT
var client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
    console.log('Connected')
})

const topic = 'test/msg'

client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})

//insert data into database when a message is received 
client.on('message', async (topic, payload) => {
    console.log('Received Message:', topic, payload.toString());
});


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