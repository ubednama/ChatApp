//JWT
import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{                   //here we are using JWT to sign token
        expiresIn: '15d'
    })

    //to use tooken as cookie aswell(this will make it more secure) | sending as cookie
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,               //milisecond
        httpOnly: true,                         //prevent XSS attacks(cross-site scripting attack) | makes it http only & unusable with javaScript
        sameSite: 'strict',                     //CSRF attacks cross-site req forgery attacks
        secure: process.env.NODE_ENV !== "development",          //if development will be not true
    });
};

export default generateTokenAndSetCookie;