// const mongoose = require("mongoose");
const express = require("express");
const Products= require("../Models/Products");
const Users = require("../Models/Users");
const Category = require("../Models/Category");
const Banners = require("../Models/Banners");
const Popular = require("../Models/Popular");
const Speciality = require("../Models/Speciality");
const Subscribers = require("../Models/Subscribers");
const router = express.Router();
const bcrypt = require("bcrypt");




//SIGNUP ROUTE
  
router.post('/signup', async(req,res)=>{
    const {name , email ,mobile ,password} = req.body;

    try{

        if(!name || !email || !mobile || !password)
        {
            return res.status(400).json({message : "Kindly Fill The Fields"});
        }
        
        if(!email.includes("@gmail.com"))
        {
            return res.status(400).json({message : "Kindly Fill The Corresct Email"});
        }
        if(mobile.length<10)
        {
            return res.status(400).json({message : "Mobile number Should Not Be Greater Than 10 Digits"});
        }
        if(password.length<8)
        {
            return res.status(400).json({message : "Password Should Be Greater Than 8 Digits"});
        }

        const userExist = await Users.findOne({email: email});

        if(userExist){
            return res.status(422).json({error: "User already Registered."});
        }
        else
        {
                //Encoding password

                const salt = await bcrypt.genSalt(12);
                const securePassword = await bcrypt.hash(password , salt);

                //Saved User in DB
                const user = await new Users({name , email , mobile , password:securePassword})
                const savedUser = await user.save();
                return res.status(200).json({message:"Signup Successfully"});
        } 
    }
    catch(err){
        console.log(err)
    }
})


//LOGIN ROUTE


router.post('/login', async(req,res)=>{

    const { email ,password} = req.body;
    try{

        if(!email || !password)
        {
            return res.status(400).json({message : "Kindly Fill The Fields"});
        }

        const userAuth  = await Users.findOne({email: email})

        if(!userAuth){
            return res.status(422).json({message:"Invalid Details"})
        }

         // Match user password with hash password

        const isMatch = await bcrypt.compare(password, userAuth.password);

        if(!isMatch){
            return res.status(422).json({message: "Invalid Details"})
        }
        else
        {
                return res.status(200).json({message:"Login Successfully"});
        } 
    }
    catch(err){
        console.log(err)
    }
})


//ALL PRODUCTS ROUTE

router.get("/products",async (req,res)=>{
    try{
        const data = await Products.find({})
        return res.send(data);
    }
    catch(err){
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})

//ALL CATEGORY ROUTE

router.get('/category',async (req,res)=>{
    try{
        const data = await Category.find({})
        return res.send(data);
    }
    catch(err){
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})

//POPULAR DISHES

router.get('/populars',async(req,res)=>{
    try{
        const data = await Popular.find();
        res.send(data);
    }
    catch(err){
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})



//TODAY SPECILITY


router.get('/specialities',async(req,res)=>{
    try{
        const data = await Speciality.find();
        res.send(data);
    }
    catch(err){
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})

//Subscriber

router.post('/subscribers',async(req,res)=>{
    try
    {
      const {email} = req.body;

      const alreadySub = await Subscribers.findOne({email:email});

      if(alreadySub)
      {
        return res.status(402).json({message:"Already Exists"});
      }
    

      if(!email.includes("@gmail.com"))
      {
        return res.status(401).json({message:"Invalid Email"});
      }

      const subscriber = await new Subscribers({email})
      const savedSubscriber = await subscriber.save();
      return res.status(200).json({message:"Successfully Subscribed"});
    }
    catch(err)
    {
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})


//Banner Route

router.get('/banners',async(req,res)=>{
    try{
        const data = await Banners.find();
        res.send(data);
    }
    catch(err){
        return res.json({message:"some Error OCCOURD"}+ err);
    }
})





module.exports = router;