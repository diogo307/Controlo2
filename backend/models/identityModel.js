const mongoose = require ('mongoose');
const {Schema} = mongoose;

const identitySchema = new Schema({
    serialNumber: {
        type: String,
        unique:true
    },
    name: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    morada: String,
    telemovel: {
        type: Number,
    }
});

// Create the model for the new database
const IdentityModel = mongoose.model('Identity', identitySchema);

// Export the model
module.exports = IdentityModel;