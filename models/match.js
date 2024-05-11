import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
    IdEquipo1: {
        type: String,
        required: true,
    },
    IdEquipo2: {
        type: String,
    },
    fecha: { type: Date },
    duracion: { type: Number },
    torneo: { type: String }
});

const MatchModel = mongoose.model("Match", MatchSchema);
export default MatchModel;