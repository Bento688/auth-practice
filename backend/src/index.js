import express from "express";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./lib/db.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "HEllo!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
  connectDB();
});
