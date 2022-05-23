import express from "express";
const router = express.Router();
import {
  addMarkingScheme,
  getMarkingScheme,
  getOneMarking,
} from "../../controllers/markingControllers/markingController.js";

router.post("/", addMarkingScheme);
router.get("/", getMarkingScheme);
router.get("/:id", getOneMarking);

export default router;
