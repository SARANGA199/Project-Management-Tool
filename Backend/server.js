import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js' 
import markingRoutes from './routes/markingRoutes.js'
import templateRouter from './routes/templateRouter.js'
import submissionRouter from "./routes/submissionRouter.js";

const app = new express();

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(bodyParser.json());
//app.use(express.json());

app.use("/template",templateRouter);
app.use("/submission",submissionRouter);

//marking controller
app.use('/markings',markingRoutes);

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});


