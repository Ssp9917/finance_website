import express from "express";
import upload from "../config/multerConfig.js";
import {
  getAllUsers,
  viewSingleUser,
  editUser,
  deleteUser,
  createUser, // Import the createUser controller
} from "../controllers/applyCardUser.controller.js";

const router = express.Router();

// Routes
router.post("/create-user", upload.fields([
    { name: "aadharFrontImage", maxCount: 1 },
    { name: "aadharBackImage", maxCount: 1 },
    { name: "pancardImage", maxCount: 1 }
]), createUser) // Create a new user
router.get("/getAllUser", getAllUsers); // Get all users
router.get("/getAllUser/:id", viewSingleUser); // View a single user
router.put("/update-user/:id", editUser); // Edit a user
router.delete("/delete-user/:id", deleteUser); // Delete a user

export default router;
