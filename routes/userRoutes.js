import express from "express";

import {
  applyDoctorAccount,
  loginUser,
  registerUser,
  userLoginSuccess,
} from "../controllers/userControllers.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/me", userLoginSuccess);
route.post("/apply-doctor-account", applyDoctorAccount);

export default route;
