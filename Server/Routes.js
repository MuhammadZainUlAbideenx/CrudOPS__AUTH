import express from 'express'
import { addUser } from './userController.js';

const router = express.Router();

router.post("/adduser",addUser);
export default router;