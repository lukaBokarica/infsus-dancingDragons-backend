import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Song from "../models/Song.js";

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
            const {title, albumId} = req.body;
            const newSong = new Song({id, title, albumId})
            try {
                await newSong.save();
                res.status(201).json(newSong);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        }
    });
}

export const getAllSongs = async (req, res) => {
    let songs = await Song.find();

    res.status(200).json(songs);
}

export const deleteSong = async (req, res) => {
    const {id} = req.params;

    Song.find({
        id: id
    }, async function (err, docs) {
        if (docs.length) {
            await Song.deleteOne({id: id});
            res.json("Song deleted successfully.");
        } else {
            res.status(400).json({message: "Song doesn't exist!"});
        }
    });
}

export const updateSong = async (req, res) => {
    const {id} = req.params;
    const {title, albumId} = req.body;
    const updatedSong = new Song({id, title, albumId})

    await Song.findOneAndUpdate({id: id}, updatedSong, {new: true})
    res.status(200).json("Song updated successfully.");
}

export default router;