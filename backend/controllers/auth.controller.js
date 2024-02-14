import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) =>{
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;

        //to match password
        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords dont match"})
        }

        //to check whether user already exists
        const user = await User.findOne({username});

        if(user) {
           return res.status(400).json({error:"Username already exists"}) 
        }

        // HASH password here
        const salt = await bcrypt.genSalt(10);            //higher more secure & more slow
        const hashedPassword = await bcrypt.hash(password, salt);

        //random placeholder avatars
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,                 //we are getting fullname which we will send to mongoDB as fullName -> fullName: fullname (had to change it later for frontend)
            username,
            password: hashedPassword ,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();


        //successfully created status code -201
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
        } else {
            res.status(400).json({error: "Invalid User data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export const login = async (req, res) =>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");     //if value is 'null' or 'undefined', with '?' expression evaluated to 'undefined' without throwing error(it ensures that code doesnt throw an error)

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
    console.log("loginUser");
}

export const logout = (req, res) =>{
    try {
        res.cookie("jwt", "",{maxAge: 0})
        res.status(200).json({message: "Logout successfully"})
    } catch(error){
        console.log("Error in logout controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}