import express, { Router } from "express";
import { registerUser, logInUser } from "../controllers/auth.controller.js"

const router  = express.Router()

router.post('/singIn',registerUser)
router.post('/logIn',logInUser)

export default router