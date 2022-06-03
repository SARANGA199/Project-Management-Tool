import express from "express";
import {
  getTopics,
  saveTopics,
  updateTopicStatus,
  getOneTopic,
  updateTopicFeedback,
  updateTopicDocumentStatus,
} from "../../controllers/topicRegisterController/topicRegisterController.js";

const router = express.Router();

router.get("/topics", getTopics);
router.get("/topics/:id", getOneTopic);
router.post("/topicRegister", saveTopics);
router.put("/topics/:id", updateTopicStatus);
router.put("/topicFeedback/:id", updateTopicFeedback);
router.put("/topicDocument/:gid", updateTopicDocumentStatus);

export default router;
