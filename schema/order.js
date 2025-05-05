const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderScheme = new Schema({
    name:{
        type:String,
    },
    total_price:{
        type:String,
    },
});
module.exports=mongoose.model("orders",orderScheme)