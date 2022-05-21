import express from "express";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js'
import studentRouter from './routers/studentRouter/studentRouter.js'

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(studentRouter);


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{

    console.log(`Server is up and running on ${PORT}`.blue);

});
