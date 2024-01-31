const mongoose = require("mongoose");

const PopularSchema = mongoose.Schema({

    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

const Popular = mongoose.model("populars",PopularSchema);
module.exports = Popular;