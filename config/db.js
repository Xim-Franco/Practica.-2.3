import mongoose from "mongoose";

export default class DB {

    static async connectDB(DB_URI) {
        //const url = "mongodb://127.0.0.1/blog_db";

        try {
            await mongoose.connect(DB_URI);
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
        const dbConnection = mongoose.connection;
        dbConnection.once("open", (_) => {
            console.log(`Database connected: ${DB_URI}`);
        });

        dbConnection.on("error", (err) => {
            console.error(`Connection error: ${err}`);
        });
        return;
    }


}

