import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js' 
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes/userRoutes.js"

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser())

//routes
app.use('/user',userRouter);

// Connect to mongodb
const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});



