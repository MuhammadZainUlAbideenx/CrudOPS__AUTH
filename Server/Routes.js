import express from 'express'
import { signUp ,login } from './userController.js';

const router = express.Router();

router.post("/signUp",signUp);
router.post("/login",login);
export default router;