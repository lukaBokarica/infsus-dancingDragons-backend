import express from "express";

import {
    createSong
} from "../controllers/Song.js";

const router=express.Router();

router.post('/add', createSong);

export default router;