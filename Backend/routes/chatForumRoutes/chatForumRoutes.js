import express from "express";
const router = express.Router();

import {
  addChatForum,
  getForumBYGroupID,
  getOneForum,
} from "../../controllers/chatForum/chatForumController.js";

router.post("/", addChatForum);
router.get("/:gid", getForumBYGroupID);
router.get("/forum/:id", getOneForum);

export default router;
