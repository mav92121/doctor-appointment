import mongoose from "mongoose";
import "dotenv/config";
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("database connected");
});
