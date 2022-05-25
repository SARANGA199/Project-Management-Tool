import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import "./db/db.js";
import markingRoutes from "./routes/markingRoutes/markingRoutes.js";
import presentationMarksRoutes from "./routes/presentationMarksRoutes/presentationMarksRoutes.js";
const app = new express();

dotenv.config();
app.use(cors());
app.use(express.json());

//marking controller
app.use("/markings", markingRoutes);

//presentationMarks Controller
app.use("/presentationMarks", presentationMarksRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`.blue);
});
