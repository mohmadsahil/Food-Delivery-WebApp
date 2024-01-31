const express = require("express");
const cors = require('cors')
const app = express();
const port = 8080;


const mongoose = require("mongoose");
const DB = require("./DB/connection");


// Solving the CORS Error.
app.use(cors({
    origin: "*",
    methods: ["GET","POST","PUT", "DELETE"],      
}));

//Setting Middlewares


app.use(express.json());
app.use(require('./Routes/routes'))


app.listen(port,()=>
{
    console.log("Started");
})


