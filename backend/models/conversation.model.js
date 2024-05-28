import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default:[],
    }]
},{timestamps:true});


// conversationSchema.post('remove', async function (doc) {
//     try {
//         console.log("Conversation removed, executing post remove hook...");
//         await mongoose.model('Message').deleteMany({ _id: { $in: doc.messages } });
//         console.log("Messages referenced in the conversation removed.");
//     } catch (error) {
//         console.error("Failed to remove conversation",error);
//     }
// });


const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;