const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

module.exports.createdUser = async (req, res) => {
    try {
        let { email, fullname, password } = req.body;

        let user = await userModel.findOne({ email:email});         
        if(user) return res.status(401).send("User Already Available");

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt,async (err, hash) => {
                if (err) {
                    res.send(err.message);
                } else {
                    let registeredUser = await userModel.create({
                        email,
                        fullname,
                        password : hash,
                    });
                  let token = generateToken(registeredUser);
                   res.cookie('token',token);
                   
                   res.send("User created successfully");
                }
            })
        })
    } catch(err) {
        res.send(err.message);
    }
}

module.exports.loginUser = async (req, res) => {
   let { email, password } = req.body;
   let user =await userModel.findOne({ email:email});

   if(!user) return res.send("Email or Password May Be Incorrect");

   bcrypt.compare(password, user.password, (err,result) => {
  if(result){
    let token = generateToken(user);
    res.cookie('token',token);
    res.send("you can login");
  }else{
    return res.send("Email or Password May Be Incorrect");
  }
   })
};