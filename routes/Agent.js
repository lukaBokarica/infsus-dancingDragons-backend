import express from "express";

import {
    getAgent,
    createAgent
} from "../controllers/Agent.js";

const router=express.Router();

router.post('/add', createAgent);
router.get('/:id', getAgent);

export default router;