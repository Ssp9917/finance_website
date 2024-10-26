import express from "express";
import { login, logout, signup } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/admin-signup", signup);

router.post("/admin-login", login);

router.post("/admin-logout", logout);

export default router;