const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }

    
});
module.exports=mongoose.model("users",userScheme)