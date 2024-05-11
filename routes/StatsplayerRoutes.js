import express from "express";
import StatsplayerModel from "../models/statsplayer.js";
const router = express.Router();

router.get("/statsplayer", async (request, response) => {
    try {
        const statsplayers = await StatsplayerModel.find({});
        response.send(statsplayers);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/statsplayer", async (request, response) => {
    const statplayer = new StatsplayerModel(request.body);

    try {
        await statplayer.save();
        response.send(statplayer);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/statsplayer/:id", async (request, response) => {
    try {
        const statplayer = await StatsplayerModel.findOne({ _id: request.params.id });
        response.send(statplayer);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;