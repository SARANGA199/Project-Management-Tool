import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js' 

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});



