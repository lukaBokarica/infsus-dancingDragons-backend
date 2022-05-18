import express from "express";

import {
    createAlbum,
    getSongsFromAlbum,
    addSongsToAlbum,
    getAllAlbums
} from "../controllers/Album.js";

const router=express.Router();

router.get('/all', getAllAlbums);
router.post('/add', createAlbum);
router.get('/:id/songs', getSongsFromAlbum);
router.post('/:id/songs/add', addSongsToAlbum);


export default router;