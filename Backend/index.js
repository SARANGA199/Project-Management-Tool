import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import './db/db.js'
import colors from 'colors';
import fileUpload from 'express-fileupload'

import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes/userRoutes.js"
import markingRoutes from './routes/markingRoutes.js'
import upload from './routes/userRoutes/upload.js'
import studentRouter from "./routes/studentRoute/studentRouter.js";
import topicRegisterRouter from "./routes/topicRegisterRoute/topicRegisterRouter.js";
import requestSupervisorRouter from "./routes/requestSupervisorRoute/requestSupervisorRouter.js";
//const app = new express();
const app = express();


dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//routes
app.use('/user', userRouter);

app.use('/api', upload);

//marking controller
app.use('/markings', markingRoutes);
app.use(studentRouter);
app.use(topicRegisterRouter);
app.use(requestSupervisorRouter);

const PORT = process.env.PORT || 8070

app.listen(PORT, () => {

    console.log(`Server is up and running on ${PORT}`.blue);

});


