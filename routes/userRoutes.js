import express from "express";

import {
  applyDoctorAccount,
  loginUser,
  registerUser,
  userLoginSuccess,
  markAllAsRead,
  clearAllNotification,
  getAllUsers,
} from "../controllers/userControllers.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/me", userLoginSuccess);
route.post("/apply-doctor-account", applyDoctorAccount);
route.post("/mark-all-read", markAllAsRead);
route.post("/clear-all", clearAllNotification);
route.get("/get_all_users", getAllUsers);

export default route;
