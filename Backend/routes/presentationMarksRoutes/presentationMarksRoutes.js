import express from "express";
const router = express.Router();
import {
  addPresentationMark,
  getPresentationMarks,
} from "../../controllers/evaluatePresentationController/evaluatePresentationController.js";

router.post("/", addPresentationMark);
router.get("/", getPresentationMarks);

export default router;
