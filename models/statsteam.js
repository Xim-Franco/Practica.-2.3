import mongoose from "mongoose";

const StatsteamSchema = new mongoose.Schema({
    barones: {
        type: Number,
        required: true,
    },
    inhibidoresnemigos: {
        type: Number,
    },
    torresenemigas: { type: Number },
    dragones: { type: Number },
    heraldos: { type: String },
    larvas: {type: Number}
});

const StatsteamModel = mongoose.model("Statsteam", StatsteamSchema);
export default StatsteamModel;