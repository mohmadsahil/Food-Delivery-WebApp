const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
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
    category:{
        type:String,
        required:true,
    },
    foodtype:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
    },
    availability:{
        type:Boolean,
        required:true,
    }
})


const Products = mongoose.model("products",ProductSchema);
module.exports = Products;