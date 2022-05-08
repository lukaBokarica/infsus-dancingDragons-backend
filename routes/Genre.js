import express from "express";

import {
    getArtistsByGenre
} from "../controllers/Genre.js";

const router=express.Router();

router.get('/:id', getArtistsByGenre);

export default router;