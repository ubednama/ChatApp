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
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: "",
    },
},{timestamps:true});


// userSchema.post('remove', async function (doc) {
//     try {
//         await mongoose.model('Conversation').deleteMany({ participants: doc._id });

//         await mongoose.model('Message').deleteMany({ $or: [{ senderId: doc._id }, { receiverId: doc._id }] });
//     } catch (error) {
//         console.error(error);
//     }
// });

//use here singular form, mongoose will consider it as plural
const User = mongoose.model("User", userSchema);

export default User;