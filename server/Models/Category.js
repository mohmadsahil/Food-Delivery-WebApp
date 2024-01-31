const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({

    name :{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Category = mongoose.model('categories',CategorySchema);
module.exports = Category;