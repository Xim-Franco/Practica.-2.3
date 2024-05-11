import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nombreU: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
    },
    correoelectronico: { type: String }
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;