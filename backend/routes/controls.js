const express = require ('express');

const { getControls, 
        createControl,
        validateIdentity, 
} = require('../controllers/controlController');

const router = express.Router();

// get all controls
router.get('/', getControls)

// create a new control
router.post('/', createControl)


module.exports = router