import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Album from "../models/Album.js";
import Song from "../models/Song.js";

const router = express.Router();

export const createAlbum = async (req, res) => {
    let lastAlbum = await Album.find().limit(1).sort({$natural:-1})
    let id = lastAlbum[0].id + 1;

    Album.find({
        id: id
    }, async function (err, docs) {
        if (docs.length) {
            console.log('Album exists already!');
        } else {
            const {title, year, coverImage, songIds} = req.body;
            const newAlbum = new Album({id, title, year, coverImage, songIds})
            try {
                await newAlbum.save();
                res.status(201).json(newAlbum);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        }
    });
}

export const getSongsFromAlbum = async (req, res) => {
    const {id} = req.params;

    const album = await Album.findOne({id: id});
    if (!album) return res.status(404).send(`No album with id: ${id}`);
    let songs = []
    for(let songId of album.songIds) {
        const song = await Song.findOne({id: songId});
        songs.push(song);
    }
    res.status(200).json(songs);
}

export const addSongsToAlbum = async (req, res) => {
    const {id} = req.params;
    const {songIds} = req.body;

    let album = await Album.findOne({id: id});
    if (!album)
        return res.status(404).send(`No album with id: ${id}`);

    for(let songId of songIds) {
        const song = await Song.findOne({id: songId});
        if (!song)
            return res.status(404).send(`No song with id: ${id}`);
        album = await Album.findOneAndUpdate({id: id}, {$addToSet: {songIds: [songId]}}, {new: true});
        await Song.updateOne({id: songId}, {albumId: id});
    }
    res.status(200).json(album);
}

export const getAllAlbums = async (req, res) => {
    let albums = await Album.find();
    res.status(200).json(albums);
}

export const getAlbumById = async (req, res) => {
    const {id} = req.params;
    const album = await Album.findOne({id: id});
    res.status(200).json(album);
}

export default router;