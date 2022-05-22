import express from "express";

import {
    createSong,
    getAllSongs,
    deleteSong
} from "../controllers/Song.js";

const router=express.Router();

router.get('/all', getAllSongs);
router.post('/add', createSong);
router.delete('/:id/delete', deleteSong);

export default router;