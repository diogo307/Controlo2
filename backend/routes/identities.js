const express = require ('express');

const { getIdentities, 
    getIdentity, 
    createIdentity, 
    deleteIdentity, 
    updateIdentity
} = require('../controllers/identityController');

const router = express.Router();

// get all identities
router.get('/', getIdentities)

// get a single identity
router.get('/:id', getIdentity)

// create a new identity
router.post('/', createIdentity)

// Delete a identity
router.delete('/:id', deleteIdentity)

// update a identity
router.patch('/:id', updateIdentity)

module.exports = router