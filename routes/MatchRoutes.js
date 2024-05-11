import express from "express";
//import ProductModel from "../models/match.js";
import MatchModel from "../models/match.js";
//import { match } from "assert";
const router = express.Router();

router.get("/match", async (request, response) => {
    try {
        const matchs = await MatchModel.find({});
        response.send(matchs);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/match", async (request, response) => {
    const match = new MatchModel(request.body);

    try {
        await match.save();
        response.send(match);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/match/:id", async (request, response) => {
    try {
        const match = await MatchModel.findOne({ _id: request.params.id });
        response.send(match);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;