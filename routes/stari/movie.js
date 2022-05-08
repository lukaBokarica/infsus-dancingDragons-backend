import express from "express";

import {
    getMoviesBySearch,
    getPopularMovies,
    getMovies,
    likeMovie,
    getMovieFromDatabase,
    findSimilarMovies
} from "../../controllers/stari/movie.js";

const router = express.Router();

router.get('/search', getMoviesBySearch)
router.get('/popular', getPopularMovies)
router.get('/db', getMovies)
router.get('/:imdb/dbMovie', getMovieFromDatabase)
router.patch('/:id/likeMovie', likeMovie)
router.get('/:id/similar', findSimilarMovies)

export default router;