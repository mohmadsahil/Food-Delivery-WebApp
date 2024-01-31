const mongoose = require("mongoose");

const SpecialitySchema = mongoose.Schema({

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

const Speciality = mongoose.model("specialities",SpecialitySchema)
module.exports = Speciality;