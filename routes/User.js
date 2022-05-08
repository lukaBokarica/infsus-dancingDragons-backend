import express from "express";

import {
    login,
    getUser
} from "../controllers/User.js";

const router=express.Router();

router.get('/:id/info', getUser);
router.post('/login', login);

export default router;