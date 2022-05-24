import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js' 
import templateRouter from './routes/templateRouter.js'

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(bodyParser.json());
//app.use(express.json());

app.use("/template",templateRouter);

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});



