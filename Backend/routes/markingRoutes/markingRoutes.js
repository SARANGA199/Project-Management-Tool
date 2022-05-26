import express from "express";
const router = express.Router();
import {
  addMarkingScheme,
  getMarkingScheme,
  getOneMarking,
  updateMarking,
} from "../../controllers/markingControllers/markingController.js";

router.post("/", addMarkingScheme);
router.get("/", getMarkingScheme);
router.get("/:id", getOneMarking);
router.put("/:id", updateMarking);

export default router;
