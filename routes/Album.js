import express from "express";

import {
    createAlbum,
    getSongsFromAlbum,
    addSongsToAlbum
} from "../controllers/Album.js";

const router=express.Router();

router.post('/add', createAlbum);
router.get('/:id/songs', getSongsFromAlbum);
router.post('/:id/songs/add', addSongsToAlbum);


export default router;