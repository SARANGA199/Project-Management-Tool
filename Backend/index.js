import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRouter from './routers/studentRouter.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter);

const CONNECTION_URL = '';
const PORT = 4000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>{
         console.log(`Server is up and running on ${PORT}`);
 } )).catch((err)=>console.log(err.message)); 
