import  Express  from "express";
const router = Express.Router();
import { addSubmissiontype,displaySubmissionType,updateSubmissionType } from "../controllers/submissionController/submissionController.js";

router.post('/addSubType',addSubmissiontype);
router.get('/displaySubType',displaySubmissionType);
router.put('/updateSubType/:id',updateSubmissionType);

export default router;