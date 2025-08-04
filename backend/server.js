import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
