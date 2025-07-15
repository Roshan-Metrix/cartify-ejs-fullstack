 const express = require('express');
 const router = express.Router();
 const ownerModel = require('../models/ownerModel');

if(process.env.NODE_ENV === "development"){
router.post('/create',async (req,res) => {
    let owners = ownerModel.find();
    if(owners.length > 0) return res.send(503).send('You dont have permission to create a new owner');
});
}

router.get('/', (req,res) => {
    res.send('hello man');
}) 

 module.exports = router;