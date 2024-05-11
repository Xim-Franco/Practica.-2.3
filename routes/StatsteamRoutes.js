import express from "express";
import StatsteamModel from "../models/statsteam.js";
const router = express.Router();

router.get("/statsteam", async (request, response) => {
    try {
        const statsteams = await StatsteamModel.find({});
        response.send(statsteams);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/statsteam", async (request, response) => {
    const statteam = new StatsteamModel(request.body);

    try {
        await statteam.save();
        response.send(statteam);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/statsteam/:id", async (request, response) => {
    try {
        const statteam = await StatsteamModel.findOne({ _id: request.params.id });
        response.send(statteam);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;