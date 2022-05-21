import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js' 

import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes/userRoutes.js"
import markingRoutes from './routes/markingRoutes.js'
import upload from './routes/userRoutes/upload.js'

const app = new express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser())

//routes
app.use('/user',userRouter);

app.use('/api',upload);

//marking controller
app.use('/markings',markingRoutes);

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});


