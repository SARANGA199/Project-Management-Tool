import express from "express";
const router = express.Router();
import {
  addMarkingScheme,
  getMarkingScheme,
  getOneMarking,
  updateMarking,
  deleteMarking,
  getMarkingBySpecialization,
} from "../../controllers/markingControllers/markingController.js";

router.post("/", addMarkingScheme);
router.get("/", getMarkingScheme);
router.get("/:id", getOneMarking);
router.get("/:specialization", getMarkingBySpecialization);
router.put("/:id", updateMarking);
router.delete("/:id", deleteMarking);

export default router;
