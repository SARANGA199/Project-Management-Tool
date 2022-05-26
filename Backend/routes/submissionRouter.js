import  Express  from "express";
const router = Express.Router();
import { addSubmissiontype,displaySubmissionType } from "../controllers/submissionController/submissionController.js";

router.post('/addSubType',addSubmissiontype);
router.get('/displaySubType',displaySubmissionType);

export default router;