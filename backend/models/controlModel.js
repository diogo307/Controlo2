const mongoose = require ('mongoose');
const {Schema} = mongoose;

const controlSchema = new Schema({
    dateTime: {
        type: String,//type: Date,
        required: true
    },
    serialNumber: {
        type: String,
        required: true,
    }
}, {timestamps:true});

// Create the model for the new database
const ControlModel = mongoose.model('Control', controlSchema);

// Export the model
module.exports = ControlModel;