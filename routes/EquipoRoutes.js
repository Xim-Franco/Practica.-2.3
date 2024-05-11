import express from "express";
import *as equipocontroller from "../controllers/equipo.js";
//import EquipoModel from "../models/equipo.js";
//import EquipoModel from "../models/equipo.js";
const router = express.Router();

router.get("/equipo", equipocontroller.PruebasEquipoGet)
   
router.post("/equipo", equipocontroller.PruebasEquipoPost)

router.get("/equipo/:id", equipocontroller.PruebasEquipoID)

export default router;