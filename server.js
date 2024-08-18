import express from "express";
import "dotenv/config";
import cors from "cors";
import "./database/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3100;

app.listen(PORT, console.log(`server running at port ${PORT}`));
