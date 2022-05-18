import express from "express";

import {
    createSong,
    getAllSongs
} from "../controllers/Song.js";

const router=express.Router();

router.get('/all', getAllSongs);
router.post('/add', createSong);

export default router;