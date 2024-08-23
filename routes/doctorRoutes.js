import express from "express";
import { getAllDoctors } from "../controllers/doctorControllers.js";
const routes = express.Router();

routes.get("/get_all_doctors", getAllDoctors);

export default routes;
