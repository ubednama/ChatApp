import path from "path";                        //for deployment
import express, { application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";       //for verifying cookies

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import checkRoutes from "./routes/api.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";

dotenv.config();

// const app = express();           -> not needed when using socket
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


//middleware
app.use(express.json());                        //to parse incoming req with JSON payloads(from req.body)
app.use(cookieParser());

// we can use middleware for clean coding
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
app.use("/api", checkRoutes)


    //used to serve static file
app.use(express.static(path.join(__dirname, "/frontend/dist")))
        //file is saved in 'dist' for better optimization


app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"));
})


// app.get("/", (req, res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });


// app.listen(PORT, () => {
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});