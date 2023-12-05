const Control = require('../models/controlModel');
const mongoose = require ('mongoose')

// get all controls
const getControls = async (req,res) => {
    const controls = await Control.find({}).sort({createdAt: -1})

    res.status(200).json(controls)
}

// create a new Control
const createControl = async (req,res) => {
    const {dateTime, serialNumber } = req.body

    /*let emptyFields = []
    if(!serialNumber){
        emptyFields.push('serialNumber')
    }
    if(!dateTime){
        emptyFields.push('dateTime')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }*/

    // add doc to db
    try {
        const control = await Control.create({serialNumber, dateTime})
        res.status(200).json(control)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getControls,
    createControl
}