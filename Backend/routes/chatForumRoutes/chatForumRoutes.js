import express from "express";
const router = express.Router();

import {
  addChatForum,
  getForumBYGroupID,
} from "../../controllers/chatForum/chatForumController.js";

router.post("/", addChatForum);
router.get("/:gid", getForumBYGroupID);

export default router;
