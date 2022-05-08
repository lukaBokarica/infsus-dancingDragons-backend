import express from "express";

import {
    getArtist,
    createArtist,
    getAllArtists,
    getAlbumsByArtist,
    deleteArtist,
    addAlbumToArtist
} from "../controllers/Artist.js";

const router=express.Router();

router.post('/add', createArtist);
router.post('/:id/addAlbum', addAlbumToArtist);
router.get('/:id', getArtist);
router.get('/:id/albums', getAlbumsByArtist);
router.get('/', getAllArtists);
router.delete('/:id/remove', deleteArtist);

export default router;