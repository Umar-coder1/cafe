const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historyScheme = new Schema({
    name:{
        type:String,
    },
    cost:{
        type:String,
    }
    
});
module.exports=mongoose.model("history",historyScheme)
