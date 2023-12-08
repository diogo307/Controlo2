require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const identityRoutes = require('./routes/identities')
const controlRoutes = require('./routes/controls')
const mqttServices = require('./services/mqttServices')
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
var mqttClient = mqtt.connect('mqtt://broker.hivemq.com')


const topic = 'test/msg'

mqttClient.on('connect', () => {
    console.log('Connected')
    mqttClient.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
    })
})

//insert data into database when a message is received 
mqttClient.on('message', async (topic, payload) => {

    const Payload = {
        serialNumber: payload.toString(),
        dateTime: new Date()
    }

    console.log('Received Message:', topic, Payload)
    mqttServices.validateIdentity(Payload)
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