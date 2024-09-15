import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();


//hook to get online status at side bar
export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		let socketInstance = null;
		if (authUser) {
			// const socketInstance = io("https://chat-app-uwfk.onrender.com/", {
			const socketInstance = io(import.meta.env.VITE_BASE_URL, {
				query: {
				userId: authUser._id,
				},
			});

			setSocket(socketInstance);


            //checking online
            // socket.on() is used to listen to the events, can be used both on client and server side
            socketInstance.on("getOnlineUsers", (users) => {
              setOnlineUsers(users);
            });
		}

		return () => {
			if (socketInstance) {
				socketInstance.close();
			}
		};
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};