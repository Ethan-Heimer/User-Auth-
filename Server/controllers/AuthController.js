const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken")

module.exports.Signup = async (req, res, next) => {
    try{
        const {email, password, username, createdAt } = req.body;
        if(!email || !password || !username){
            return res.status(401).json({msg: "Please fill all fields"});
        }   

        const existingUser = await User.FindOne({email});
        if(existingUser) {
            return res.json({message: "User"});
        }

        const user = await User.create({ email, password, username, createdAt })
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })

        res.status(201).json({message: "User signed in successfully", success: true, user});
        next();
    }
    catch(error){
        console.log(error);
    }
}

module.exports.Login = async (req, res, next) => {
    
}