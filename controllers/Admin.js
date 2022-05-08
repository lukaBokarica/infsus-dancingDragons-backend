import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Admin from "../models/Admin.js";
import User from "../models/User.js";

const router = express.Router();

export const createAdmin = async (req, res) => {

    Admin.find({userId: req.body.userId}, async function (err, docs) {
        if (docs.length) {
            console.log('Admin exists already!');
            res.status(400).json({message: "Admin exists already!"});
        } else {
            const {userId, position} = req.body;
            //
            User.find({id: userId}, async function (err, docs) {
                if (docs.length) {
                    console.log('User exists already!');
                    res.status(400).json({message: "User exists already!"});
                } else {
                    const {firstName, lastName, dateOfBirth} = req.body;

                    const newUser = new User({userId, firstName, lastName, dateOfBirth})
                    try {
                        await newUser.save();
                        //res.status(201).json(newUser);
                    } catch (error) {
                        res.status(409).json({message: error.message});
                    }
                }
            });
            //
            const newAdmin = new Admin({userId, position})
            try {
                await newAdmin.save();
                res.status(201).json(newAdmin);
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        }
    });
}



export default router;