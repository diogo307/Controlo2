const controlServices = require('../services/controlServices');

// get all controls
const getControls = async (req,res) => {
    return controlServices.getControls(req,res);
}

// create a new Control
const createControl = async (req,res) => {
    const control = await controlServices.createControl(req,res);
    if (control != null){
        return res.status(200).json(req.body);
    }
    else{
        return res.status(400).json({error: 'Could not create Control instance.'})
    }
}

const findOneControl = async (req,res) => {
    return controlServices.findOneControl(req,res);
}

module.exports = {
    getControls,
    createControl,
    findOneControl
}