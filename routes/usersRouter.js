 const express = require('express');
 const router = express.Router();
 const userModel = require('../models/userModel')

router.get('/', (req,res) => {
    res.send('hello man');
});

router.post('/register',async (req,res) => {
   try{
     let { email , fullname, password } = req.body;
    let registeredUser =await userModel.create({
        email,
        fullname,
        password,
    })
    console.log(registeredUser);
    res.status(202).send("Created users");
   } catch(err){
    res.send(err.message);
   }
});

 module.exports = router;