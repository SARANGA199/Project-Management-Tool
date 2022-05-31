import express from "express";
const router = express.Router();

import {
  addChatReply,
  getReplyBYForumID,
  deleteChatReply,
  updateChatReply,
} from "../../controllers/chatForum/chatReplyController.js";

router.post("/", addChatReply);
router.get("/:fid", getReplyBYForumID);
router.delete("/:id", deleteChatReply);
router.put("/:id", updateChatReply);

export default router;
