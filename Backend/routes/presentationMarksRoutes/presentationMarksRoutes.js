import express from "express";
const router = express.Router();
import { addPresentationMark } from "../../controllers/evaluatePresentationController/evaluatePresentationController.js";

router.post("/", addPresentationMark);

export default router;
