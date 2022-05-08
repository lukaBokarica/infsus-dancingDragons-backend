import Artist from "../models/Artist.js";
import express from 'express';
import mongoose from "mongoose";
import request from "request";
import User from "../models/User.js";
import Album from "../models/Album.js";
import Genre from "../models/Genre.js";
import mongo from "mongodb";

var ObjectId = mongo.ObjectId;
const router = express.Router();

export const getAllArtists = async (req, res) => {
    try {
        const artist = await Artist.find();
        res.status(200).json(artist);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getArtist = async (req, res) => {
    const {id} = req.params;

    const artist = await Artist.findOne({userId: id});
    if (!artist) return res.status(404).send(`No artist with id: ${id}`);
    res.send(artist);
}

export const getAlbumsByArtist = async (req, res) => {
    const {id} = req.params;
    const artist = await Artist.findOne({userId: id});
    if (!artist)
        return res.status(404).send(`No artist with id: ${id}`);
    let albums = []
    for(let albumId of artist.albums) {
        const album = await Album.findOne({id: albumId});
        albums.push(album);
    }

    res.status(200).json(albums);
}

export const addAlbumToArtist = async (req, res) => {
    const {id} = req.params;

    const artist = await Artist.findOne({userId: id})
    if (!artist)
        return res.status(404).send(`No artist with id: ${id}`);

    let albumId = req.body.id;
    Album.find({
        id: albumId
    }, async function (err, docs) {
        if (docs.length) {
            try {
                const updatedArtist = await Artist.findOneAndUpdate({userId: id}, {$addToSet: {albums: [docs[0].id]}}, {new: true})
                res.status(201).json(updatedArtist);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        } else {
            console.log("Album doesn't exist!");
        }
    });
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// TODO
export const createArtist = async (req, res) => {

    let lastUser = await User.find().limit(1).sort({$natural:-1})
    let userId = lastUser[0].id + 1;
    let name = ""

    Artist.find({
        artistName: req.body.artistName
    }, async function (err, docs) {
        if (docs.length) {
            console.log('Artist with that name already exists!');
            res.status(400).json({message: "Artist with that name already exists!"});
        } else {
            //let contract = Contract;
            const {firstName, lastName, dateOfBirth, imageURL, artistName, genre} = req.body;
            let albums = [];
            name = genre;
            const newArtist = new Artist({userId, imageURL, artistName, albums, genre})
            await newArtist.save();
            //KREIRA NOVOG KORISNIKA DODATNO
            let id = userId;
            User.find({
                id: userId
            }, async function (err, docs) {
                if (docs.length) {
                    console.log('Artist with that name already exists!');
                    res.status(400).json({message: "Artist with that name already exists!"});
                } else {
                    const username = firstName + lastName;
                    const password = generatePassword();
                    const newUser = new User({id, firstName, lastName, dateOfBirth, username, password})
                    await newUser.save();

                    // kreira i novi žanr ako je potrebno
                    try {
                        Genre.find({name: name}, async function (err, docs) {
                            if (docs.length) {
                                console.log('Genre already exists! All good');
                                await Genre.findOneAndUpdate({name: name}, {$addToSet: {artistIds: [id]}}, {new: true})
                            } else {
                                let artistIds = [];
                                artistIds.push(newArtist.userId);
                                let lastGenre = await Genre.find().limit(1).sort({$natural: -1})
                                let id = lastGenre[0].id + 1;
                                const newGenre = new Genre({id, name, artistIds})
                                try {
                                    await newGenre.save();
                                    console.log('New genre created!');

                                } catch (error) {
                                    res.status(409).json({message: error.message});
                                }
                            }
                        });
                    } catch (error) {
                        res.status(409).json({message: error.message});
                    }

                    try {
                        res.status(201).json(newArtist);
                    } catch (error) {
                        res.status(409).json({message: error.message});
                    }
                }
            });
        }
    });
}

// TODO
export const deleteArtist = async (req, res) => {
    const {id} = req.params;

    User.find({
        id: id
    }, async function (err, docs) {
        if (docs.length) {
            Artist.find({
                userId: id
            }, async function (err, docs) {
                if (docs.length) {
                    await Artist.deleteOne({userId: id});
                    await User.deleteOne({id: id});
                    res.json({message: "Artist deleted successfully."});
                    // DODATNO BRISANJE!!!
                    // 1) brisanje albuma i pjesama

                    // 2) žanra ako nema više pjevača u njemu
                    await Genre.findOneAndUpdate({name: docs[0].genre}, {$pull: {artistIds: docs[0].userId}});


                    // 3) ugovora (i agentu ukloniti tog izvođača)


                } else {
                    res.status(400).json({message: "Artist doesn't exist!"});
                }
            });
        } else {
            res.status(400).json({message: "User doesn't exist!"});
        }
    });
}

export default router;