import express from "express";
import {getTopics,saveTopics} from "../../controllers/topicRegisterController/topicRegisterController.js";

const router = express.Router();

router.get('/topics',getTopics);
router.post('/topics',saveTopics);

export default router;