const identityServices = require('../services/identityServices')

// find one identity
const findOneIdentity = async (req,res) => {
    
    const identity = await Identity.findOne({serialNumber: req.body.serialNumber});
    if (identity != null){
        return res.status(200).json(identity);
    }
    else{
        return res.status(404).json({error: 'No such identity'});
    }
}

// get all identities
const getIdentities = async (req,res) => {
    return identityServices.getIdentities(req,res);
    
}

// get a single identity
const getIdentity = async (req,res) => {
    return identityServices.getIdentity(req,res);
}

// create a new identity
const createIdentity = async (req,res) => {
    return identityServices.createIdentity(req,res);
}

// Delete a identity
const deleteIdentity = async (req,res) => {
    return identityServices.deleteIdentity(req,res);
}

// update a identity
const updateIdentity = async (req,res) => {
    return identityServices.updateIdentity(req,res);
}

module.exports = {
    findOneIdentity,
    getIdentities,
    getIdentity,
    createIdentity,
    deleteIdentity,
    updateIdentity
}