const UserModel = require("../Model/user.model");
const express= require('express');
const UserRouter= express.Router();
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt');
require('dotenv').config()
UserRouter.post('/register',async(req,res)=>{
    const {name,avatar,email,password}= req.body;
    try{
        const exist= await UserModel.findOne({email});
        if(exist){
            return res.status(400).send("User already exist");
        }
        bcrypt.hash(password,3,async(err,hash)=>{
            if(err){
                return res.status(400).send(err.message);
            }
            const user= new UserModel({
                name,email,password:hash,avatar,created_at:Date.now()
            });
            await user.save();
            res.status(200).send(user);
        })
    }catch(err){
        return res.status(400).send(err.message)
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password} =req.body;
    try{
        const user =await UserModel.findOne({email});
        if (user){
            bcrypt.compare(password,user.password,(err, decoded) => {
                if(decoded){
                    const token = jwt.sign({userID:user._id},`${process.env.SECRET}`);
                    res.status(200).json({message:"User Logged In",token,name:user.name});
                }else{
                    res.status(400).send("Wrong credentials");
                }
            });
        }else{
            res.status(400).send("User does not exist");
        }
    }catch(err){
        res.status(400).send("User is not found");
    }
});

module.exports= UserRouter