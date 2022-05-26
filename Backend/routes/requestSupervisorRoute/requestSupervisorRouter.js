import express from "express";
import {getRequestSV,saveRequestSV} from "../../controllers/requestSupervisorController/requestSupervisorController.js";

const router = express.Router();

router.get('/requestSV',getRequestSV);
router.post('/requestSV',saveRequestSV);

export default router;