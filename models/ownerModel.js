const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullName : {
        type : String,
        minLength : 4
    },
    email : String,
    password : String,
    products :  {
        type : Array,
        default : []
    },
    picture : String,
    gstin : String
});

module.exports = mongoose.model("owner",ownerSchema)

