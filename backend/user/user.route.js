import express from "express";
import userController from "./user.controller.js";

const router = express.Router();

// Register User Route (Calls registerUser method from the class instance)
router.post("/register", userController.registerUser);

export default router;
