import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const conversations = await Conversation.find({ participants: loggedInUserId });

		const userIds = conversations.flatMap(conversation => conversation.participants);
		const uniqueUserIds = Array.from(new Set(userIds));

		const filteredUsers = await User.find({ _id: { $in: uniqueUserIds, $ne: loggedInUserId } }).select("-password");      //not equal to loggedInUserId

        // res.status(200).json(filteredUsers);


		const usersWithDetails = await Promise.all(filteredUsers.map(async (user) => {
			const lastConversation = conversations.find(conversation => conversation.participants.includes(user._id));
			if (lastConversation) {
				const lastMessage = await Message.findOne({ _id: lastConversation.messages[lastConversation.messages.length - 1] });
				const lastMessageTimeStamp = lastMessage ? lastMessage.createdAt : lastConversation.updatedAt;
				return {
					...user.toObject(),
					conversationUpdatedAt: lastConversation.updatedAt,
					lastMessage: lastMessage ? lastMessage.message : null,
					lastMessageTimeStamp: lastMessageTimeStamp
				};
			} else {
				return {
					...user.toObject(),
					conversationUpdatedAt: null,
					lastMessage: null,
					lastMessageTimeStamp: null
				};
			}
		}));

		res.status(200).json(usersWithDetails);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getAllUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};