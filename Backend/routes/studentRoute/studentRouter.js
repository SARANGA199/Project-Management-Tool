import express from "express";
import {
  getMembers,
  saveMembers,
  getGroupID,
} from "../../controllers/studentController/studentController.js";

const router = express.Router();

router.get("/members", getMembers);
router.get("/member/:email", getGroupID);
router.post("/members", saveMembers);

export default router;
