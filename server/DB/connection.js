const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/hotandspicy').then(()=>{
    console.log("CONNECTED TO THE DB")
}).catch((err)=>{
    console.log("No Connection");
})

