 const express = require('express');
 const router = express.Router();
 const ownerModel = require('../models/ownerModel');

// if(process.env.NODE_ENV === "development"){
router.post('/create',async (req,res) => {
    let owners = await ownerModel.find();
    if(owners.length > 0){
        return res
    .status(502)
    .send('You dont have permission to create a new owner');
}
let { fullname, email, password} = req.body;
  let createdOwner = await ownerModel.create({
     fullname,
    email,
    password,
  });
  res.status(201).send(createdOwner);
});
// }

router.get('/', (req,res) => {
    res.send('hello man');
}) 

 module.exports = router;