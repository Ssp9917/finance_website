import express from "express";
import { getAllUsers, login, logout, signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);
router.get('/getAllUser',getAllUsers)

router.post("/logout", logout);

export default router;