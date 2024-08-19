import express from "express";

import {
  loginUser,
  registerUser,
  userLoginSuccess,
} from "../controllers/userControllers.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/me", userLoginSuccess);

export default route;
