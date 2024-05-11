import express from "express";
//import ProductModel from "../models/jugador.js";
//import EquipoModel from "../models/equipo.js";
import JugadorModel from "../models/jugador.js";
import { pruebas } from "../controllers/jugador.js";
const router = express.Router();

router.get("/jugador", async (request, response) => {
    try {
        const jugador = await JugadorModel.find({});
        response.send(jugador);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/jugador", async (request, response) => {
    const jugador = new JugadorModel(request.body);

    try {
        await jugador.save();
        response.send(jugador);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/jugador/:id", async (request, response) => {
    try {
        const jugador = await JugadorModel.findOne({ _id: request.params.id });
        response.send(jugador);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.get("/jugadores/prueba", pruebas)

export default router;