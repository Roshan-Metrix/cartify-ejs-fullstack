const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName : {
        type : String,
        minLength : 4
    },
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

module.exports = mongoose.model("user",userSchema);

