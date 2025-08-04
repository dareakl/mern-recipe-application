import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import recipesRoutes from "./routes/recipes.js";
import { connectDB } from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipesRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at port ${PORT}`);
});
