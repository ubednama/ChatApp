import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { formatTimeInterval } from "../../utils/extractTIme";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  const renderMessages = () => {
    return messages.map((message, index) => {
      const previousMessage = messages[index - 1];
      const showTimeInterval = previousMessage
        ? new Date(message.createdAt) - new Date(previousMessage.createdAt) >
          24 * 60 * 60 * 1000
        : false;
      return (
        <div
          key={message._id}
          ref={index === messages.length - 1 ? lastMessageRef : null}
        >
          {showTimeInterval && (
            <p className="text-center text-gray-500">y
              {formatTimeInterval(previousMessage.createdAt, message.createdAt)}
            </p>
          )}
          <Message message={message} />
        </div>
      );
    });
  };

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && renderMessages()}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;