import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Song from "../models/Song.js";
import Album from "../models/Album.js";

const router = express.Router();

export const createSong = async (req, res) => {
    let lastSong = await Song.find().limit(1).sort({$natural:-1})
    let id = lastSong[0].id + 1;

    Song.find({
        id: id
    }, async function (err, docs) {
        if (docs.length) {
            console.log('Song exists already!');
        } else {
            const {title, artistsIds} = req.body;
            const newSong = new Song({id, title, artistsIds})
            try {
                await newSong.save();
                res.status(201).json(newSong);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        }
    });

}

export default router;