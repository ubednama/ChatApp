import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";       //for verifying cookies

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//middleware
app.use(express.json());                    //to parse incoming req with JSON payloads(from req.body)
app.use(cookieParser());

// we can use middleware for clean coding
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


//route
// app.get("/", (req, res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello World!!");
// });


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});