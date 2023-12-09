const controlServices = require('../services/controlServices');
const identityServices = require('../services/identityServices');

// validate identity
const validateIdentity = async (req,res) => {

    try {

        const identityResult = await identityServices.findOneIdentity(req,res);
       
        if(identityResult != null){
            console.log("identityResult: ",identityResult);
            const controlResult = await controlServices.createControl(req,res);
            console.log("controlResult: ",controlResult);
            return controlResult;
        }
        else{
            console.log("identityResult123: ",identityResult);
            return null
        }
    } catch (error) {
        return null
    }
}

module.exports = {
    validateIdentity
}