export function sortChats(chats) {
    return chats.slice().sort((a, b) => {
        const updatedAtA = new Date(a.conversationUpdatedAt);
        const updatedAtB = new Date(b.conversationUpdatedAt);
        return updatedAtB - updatedAtA;
    });
}