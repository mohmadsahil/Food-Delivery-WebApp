const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    wishlists:{
        type:Array,
    },
    orders:{
        type:Array,
    },
})


const Users = mongoose.model("users",UserSchema);
module.exports = Users;