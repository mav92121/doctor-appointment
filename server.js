import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.json({
    message: "this is server",
  });
});

app.listen(PORT, console.log(`server running at port ${PORT}`));
