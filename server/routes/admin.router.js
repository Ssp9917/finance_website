import express from "express";
import { login, logout, signup, getAdminDetails, updateAdminDetails } from "../controllers/admin.controller.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

router.post("/admin-signup", signup);

router.post("/admin-login", login);

router.post("/admin-logout", logout);
router.get('/getAdminDetails',getAdminDetails);
router.put('/updateAdminDetails',upload.single('qrcode'),updateAdminDetails);

export default router;