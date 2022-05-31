import express from "express";
const router = express.Router();

import {
  addChatForum,
  getForumBYGroupID,
  getOneForum,
  deleteChatForum,
  updateChatForum,
} from "../../controllers/chatForum/chatForumController.js";

router.post("/", addChatForum);
router.get("/:gid", getForumBYGroupID);
router.get("/forum/:id", getOneForum);
router.put("/:id", updateChatForum);
router.delete("/:id", deleteChatForum);

export default router;
