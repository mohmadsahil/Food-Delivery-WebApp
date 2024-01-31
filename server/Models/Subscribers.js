const mongoose = require("mongoose");

const SubscriberSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})


const Subscribers = mongoose.model("subscribers",SubscriberSchema);
module.exports = Subscribers;