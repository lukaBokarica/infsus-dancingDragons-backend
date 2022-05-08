import Artist from "../models/Artist.js";
import express from 'express';
import mongoose from "mongoose";
import request from "request";
import Contract from "../models/Contract.js";
import Agent from "../models/Agent.js";
import {ObjectId} from "mongodb";

const router = express.Router();

export const getAgent = async (req, res) => {
    const {id} = req.params;

    const agent = await Agent.findOne({id: id});
    if (!agent) return res.status(404).send(`No agent with id: ${id}`);
    res.send(agent);
}

export const createAgent = async (req, res) => {

    Agent.find({
        id: req.body.id
    }, async function (err, docs) {
        if (docs.length) {
            console.log('Agent exists already!');
        } else {
            const {id, artistId, contractId} = req.body;
            const newAgent = new Artist({id, artistId, contractId})
            try {
                await newAgent.save();
                // kreira i novi ugovor
                let contract = Contract.findOne(contractId);
                if (!contract) {
                    const newContract = new Contract({id, startDate, endDate, artistId, agentId, value})
                    try {
                        await newContract.save();
                        res.status(201).json(newAgent);
                    } catch (error) {
                        res.status(409).json({message: error.message});
                    }
                }
            } catch (error) {
                res.status(409).json({message: error.message});
            }
        }
    });
}

export default router;