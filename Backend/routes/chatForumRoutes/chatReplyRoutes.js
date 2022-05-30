import express from "express";
const router = express.Router();

import {
  addChatReply,
  getReplyBYForumID,
} from "../../controllers/chatForum/chatReplyController.js";

router.post("/", addChatReply);
router.get("/:fid", getReplyBYForumID);

export default router;
