import mongoose from "mongoose";

const EquipoSchema = new mongoose.Schema({
    nombreEquipo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    pais: { type: String },
    campeonatos: { type: Number },
});

const EquipoModel = mongoose.model("Equipo", EquipoSchema);
export default EquipoModel;