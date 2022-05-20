import express from "express";
import{getMembers,saveMembers} from '../controllers/studentController.js'
const router = express.Router();

router.get('/members',getMembers);
router.post('/members',saveMembers);


export default router;