import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js'
import fileUpload from 'express-fileupload'
import bodyParser from 'body-parser';

import templateRouter from "./routes/templateRouter.js";

import submissionRouter from "./routes/submissionRouter.js";
import markingRoutes from "./routes/markingRoutes/markingRoutes.js";
import presentationMarksRoutes from "./routes/presentationMarksRoutes/presentationMarksRoutes.js";
import upload from './routes/userRoutes/upload.js'
import studentRouter from "./routes/studentRoute/studentRouter.js";
import topicRegisterRouter from "./routes/topicRegisterRoute/topicRegisterRouter.js";
import requestSupervisorRouter from "./routes/requestSupervisorRoute/requestSupervisorRouter.js";
import topicSubmitDocRouter from "./routes/topicDocSubmitRoute/topicSubmitDocRouter.js";
import allocatePanelRouter from "./routes/allocatePanelRoutes/allocatePanelRouter.js"

import cookieParser from "cookie-parser";

// import cookieParser from "cookie-parser";
// import userRouter from "./routes/userRoutes/userRoutes.js";
// import presentationMarksRoutes from "./routes/presentationMarksRoutes/presentationMarksRoutes.js";

// import upload from "./routes/userRoutes/upload.js";
// import studentRouter from "./routes/studentRoute/studentRouter.js";
// import topicRegisterRouter from "./routes/topicRegisterRoute/topicRegisterRouter.js";
// import requestSupervisorRouter from "./routes/requestSupervisorRoute/requestSupervisorRouter.js";

import userRouter from "./routes/userRoutes/userRoutes.js";
import stdSubmitDoc from "./routes/stdSubmitDocRoute/stdSubmitDocRouter.js";

const app = new express();

dotenv.config();
app.use(cors());
app.use(express.json());
// app.use(cookieParser())
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

app.use("/template", templateRouter);
app.use("/submission", submissionRouter);

//routes
app.use("/user", userRouter);

app.use("/api", upload);

//marking controller
app.use("/markings", markingRoutes);
app.use("/presentationMarks", presentationMarksRoutes);
app.use(studentRouter);
app.use(topicRegisterRouter);
app.use(requestSupervisorRouter);
app.use(stdSubmitDoc);
app.use("/topicSubmitDoc",topicSubmitDocRouter);
app.use("/allocatePanel",allocatePanelRouter);



// app.use(studentRouter);
// app.use(topicRegisterRouter);
// app.use(requestSupervisorRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`.blue);
});
