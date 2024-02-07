import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]                //used for options which have certain predefined value
    },
    profilePic: {
        type: String,
        default: "",
    },
},{timestamps:true});               //createdAt, updateAt => Member since <createdAt>


//use here singular form, mongoose will consider it as plural
const User = mongoose.model("User", userSchema);

export default User;