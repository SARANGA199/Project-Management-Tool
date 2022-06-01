import  Express  from "express";
const router = Express.Router();
import { addSubmissiontype,displaySubmissionType,updateSubmissionType,updateAllSubmissionTypeData,deleteSubType } from "../controllers/submissionController/submissionController.js";

router.post('/addSubType',addSubmissiontype);
router.get('/displaySubType',displaySubmissionType);
router.put('/updateSubType/:id',updateSubmissionType);
router.put('/updateAlldata/:id',updateAllSubmissionTypeData);
router.delete('/deleteSubType/:id',deleteSubType);



export default router;