import mongoose from "mongoose";

const TorneoSchema = new mongoose.Schema({
    nombreTorneo: {
        type: String,
        required: true,
    },
    Liga: {
        type: String,
    },
    fechainicio: { type: Date},
    efechatermino: { type: Date },
    estado: { type: Boolean  }
});

const TorneoModel = mongoose.model("Torneo", TorneoSchema);
export default TorneoModel;