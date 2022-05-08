import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Song from "../models/Song.js";
import Album from "../models/Album.js";
import User from "../models/User.js";

const router = express.Router();

export const login = async (req, res) => {
    User.find({
        username: req.body.username
    }, async function (err, docs) {
        if (docs.length) {
            const {username, password} = req.body;
            if(docs[0].password == password) {
                //dodati dohvat admina/artista
                res.status(201).json(docs[0]);
            } else {
                res.status(409).json({message: "Wrong credentials!"});
            }
        } else {
            res.status(409).json({message: "User doesn't exist in db!"});
        }
    });
}

export const getUser = async (req, res) => {
    const {id} = req.params;
    User.find({
        id: id
    }, async function (err, docs) {
        if (docs.length) {
            res.status(201).json(docs[0]);
        } else {
            res.status(409).json({message: "User doesn't exist in db!"});
        }
    });
}
export default router;