import express from "express";
import {
  getTopics,
  saveTopics,
  updateTopicStatus,
} from "../../controllers/topicRegisterController/topicRegisterController.js";

const router = express.Router();

router.get("/topics", getTopics);
router.post("/topics", saveTopics);
router.put("/topics/:id", updateTopicStatus);

export default router;
