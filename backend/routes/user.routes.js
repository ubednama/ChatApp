import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsersForSidebar, getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute, getUsersForSidebar)
router.get("/all", protectRoute, getAllUsersForSidebar)

export default router;