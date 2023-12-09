const Identity = require('../models/identityModel');
const mongoose = require ('mongoose');

const findOneIdentity = async (req, res) => {
    try {
        const serialNumber = req.serialNumber;

        // Use await to wait for the findOne method to complete
        const optionalIdentity = await Identity.findOne({ serialNumber: serialNumber });
        console.log(optionalIdentity)
        return optionalIdentity
    } catch (err) {
        // Handle any errors that occur during the process
        return null;
    }
};


// get all identities
const getIdentities = async (req,res) => {
    const identities = await Identity.find({}).sort({createdAt: -1})

    res.status(200).json(identities)
}

// get a single identity
const getIdentity = async (req,res) => {
    const {id} = req.params;

    let identity = await Identity.findOne({serialNumber: id});

    if (!identity){
        return res.status(404).json({error: 'No such identity'});
    }

    res.status(200).json(identity);
}

// create a new identity
const createIdentity = async (req,res) => {
    const {serialNumber, name, email, morada, telemovel}=req.body

    /*let emptyFields = []
    if(!serialNumber){
        emptyFields.push('serialNumber')
    }
    if(!name){
        emptyFields.push('name')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(!morada){
        emptyFields.push('morada')
    }
    if(!telemovel){
        emptyFields.push('telemovel')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }*/

    // add doc to db
    try {
        const identity = await Identity.create({serialNumber, name, email, morada, telemovel})
        res.status(200).json(identity)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a identity
const deleteIdentity = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such identity'})
    }

    const identity = await Identity.findOneAndDelete({_id: id});

    if (!identity){
        return res.status(404).json({error: 'No such identity'});
    }

    res.status(200).json(identity);
}

// update a identity
const updateIdentity = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such identity'})
    }

    const identity = await Identity.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!identity){
        return res.status(404).json({error: 'No such identity'});
    }

    res.status(200).json(identity);
}

module.exports = {
    findOneIdentity,
    getIdentities,
    getIdentity,
    createIdentity,
    deleteIdentity,
    updateIdentity
}