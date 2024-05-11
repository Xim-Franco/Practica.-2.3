import mongoose from "mongoose";

const JugadorSchema = new mongoose.Schema({
    nombreJugador: {
        type: String,
        required: true,
    },
    posicion: {
        type: String,
    },
    nickname: { type: String },
    edad: { type: Number },
    pais: { type: String },
    currentteam: {type: String}

});

const JugadorModel = mongoose.model("Jugador", JugadorSchema);
export default JugadorModel;