const express = require('express');
const router = express.Router();
 
const FoundApi = require('./../src/found/api')

const foundApi = new FoundApi();   
 
router.get('/found', foundApi.index); 
router.get('/found/:id', foundApi.read); 
router.post('/found', foundApi.store); 
router.put('/found/:id', foundApi.update); 
router.delete('/found/:id', foundApi.destroy); 

module.exports = router;
