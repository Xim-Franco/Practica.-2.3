import express from "express";
import TorneoModel from "../models/torneo.js";
const router = express.Router();

router.get("/torneo", async (request, response) => {
    try {
        const torneos = await TorneoModel.find({});
        response.send(torneos);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/torneo", async (request, response) => {
    const torneo = new TorneoModel(request.body);

    try {
        await torneo.save();
        response.send(torneo);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/torneo/:id", async (request, response) => {
    try {
        const torneo = await TorneoModel.findOne({ _id: request.params.id });
        response.send(torneo);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;