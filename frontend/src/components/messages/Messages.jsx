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
    let renderedMessages = [];
    let currentDate = null;

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];

      // const messageDate = new Date(message.createdAt).toDateString();

      const messageDate = formatTimeInterval(message.createdAt, new Date());

      const isNewDate = currentDate !== messageDate;

      if (isNewDate) {
        const dateElement = (
          <div key={`date-${message._id}`} className="text-center flex justify-center mb-2">
            <p className="text-gray-400 bg-gray-800 rounded-md w-fit px-2">
              {messageDate}
            </p>
          </div>
        );
        renderedMessages.push(dateElement);

        currentDate = messageDate;
      }

      const messageElement = (
        <div key={message._id}>
          <Message message={message} />
        </div>
      );
      renderedMessages.push(messageElement);
    }

    return renderedMessages;
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