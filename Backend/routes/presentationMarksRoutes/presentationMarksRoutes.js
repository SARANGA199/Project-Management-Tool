import express from "express";
const router = express.Router();
import {
  addPresentationMark,
  getPresentationMarks,
  getMarksByType,
} from "../../controllers/evaluatePresentationController/evaluatePresentationController.js";

router.post("/", addPresentationMark);
router.get("/", getPresentationMarks);
router.get("/marks/:type", getMarksByType);

export default router;
