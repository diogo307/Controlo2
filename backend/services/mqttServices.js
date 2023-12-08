const controlServices = require('../services/controlServices');
const identityServices = require('../services/identityServices');

// validate identity
const validateIdentity = async (req,res) => {

    try {

        const identityResult = await identityServices.findOneIdentity(req,res);

        if(identityResult != null){
            const controlResult = await controlServices.create(req,res);
    
            return controlResult;
        }
        else{
            return null
        }
    } catch (error) {
        return null
    }
}

module.exports = {
    validateIdentity
}