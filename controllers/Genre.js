import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Artist from "../models/Artist.js";
import Genre from "../models/Genre.js";

const router = express.Router();

export const getArtistsByGenre = async (req, res) => {
    const {id} = req.params;
    const genre = await Genre.findOne({id: id});
    if (!genre) return res.status(404).send(`No genre with id: ${id}`);
    let artists = []
    for(let artistId of genre.artistIds) {
        const artist = await Artist.findOne({userId: artistId});
        artists.push(artist)
    }
    res.status(200).json(artists);
}



export default router;