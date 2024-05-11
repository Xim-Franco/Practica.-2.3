import mongoose from "mongoose";

const StatsplayerSchema = new mongoose.Schema({
    MVP: {
        type: Number,
        required: true,
    },
    Kill: {
        type: Number,
    },
    Death: { type: Number },
    Assistance: { type: Number }
});

const StatsplayerModel = mongoose.model("Statsplayer", StatsplayerSchema);
export default StatsplayerModel;