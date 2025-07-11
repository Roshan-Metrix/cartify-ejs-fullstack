const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cartify');

const userSchema = mongoose.Schema({
    fullName : {
        type : String,
        minLength : 4
    }
    email : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    isAdmin : Boolean,
    orders :  {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
});

module.exports = mongoose.model("user",userSchema)

const product = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    discount : 
})