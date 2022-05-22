import express from "express";

import {
    createSong,
    getAllSongs,
    deleteSong,
    updateSong
} from "../controllers/Song.js";

const router=express.Router();

router.get('/all', getAllSongs);
router.post('/add', createSong);
router.delete('/:id/delete', deleteSong);
router.post('/:id/update', updateSong);

export default router;