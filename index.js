import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import ProductRouter from "./routes/ProductRoutes.js";
import EquipoRouter from "./routes/EquipoRoutes.js"
import JugadorRouter from "./routes/JugadorRoutes.js"
import MatchRouter from "./routes/MatchRoutes.js"
import StatsplayerRouter from "./routes/StatsplayerRoutes.js";
import StatsteamsRouter from "./routes/StatsteamRoutes.js"
import TorneoRouter from "./routes/TorneoRoutes.js"
import UserRouter from "./routes/UserRoutes.js"




dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", ProductRouter);
app.use("/api", EquipoRouter);
app.use("/api", JugadorRouter);
app.use("/api", MatchRouter);
app.use("/api", StatsplayerRouter);
app.use("/api", StatsteamsRouter);
app.use("/api", TorneoRouter);
app.use("/api", UserRouter);


DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});