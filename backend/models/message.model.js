import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    },
    seen:{
        type: Boolean,
        default: false
    }
},{timestamps: true});                      //createdAt, updatedAt

// messageSchema.post('remove', async function (doc) {
//     try {
//         await mongoose.model('Conversation').updateMany(
//             { messages: doc._id },
//             { $pull: { messages: doc._id } }
//         );
//         console.log("Message reference removed from conversations.");
//     } catch (error) {
//         console.error("Error removing message reference from conversations:", error);
//     }
// });

const Message = mongoose.model("Message", messageSchema);

export default Message;