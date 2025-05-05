const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const asortScheme = new Schema({
    dish:{
        type:String,
    },
    cost:{
        type:String
    } ,  
    id_category:{
        type:String
    }
});
module.exports=mongoose.model("asortiment",asortScheme)