import  Express  from "express";
const router = Express.Router();
import { addSubmissiontype,displaySubmissionType,updateSubmissionType,updateAllSubmissionTypeData } from "../controllers/submissionController/submissionController.js";

router.post('/addSubType',addSubmissiontype);
router.get('/displaySubType',displaySubmissionType);
router.put('/updateSubType/:id',updateSubmissionType);
router.put('/updateAlldata/:id',updateAllSubmissionTypeData);


export default router;