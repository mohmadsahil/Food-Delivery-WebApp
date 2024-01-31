const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({

    image:{
        type:String,
        required:true
    }
})

const Banners = mongoose.model('banners',BannerSchema);
module.exports = Banners;