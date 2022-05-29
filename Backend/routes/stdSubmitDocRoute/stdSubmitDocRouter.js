import express from "express";
import {
  getStdSubmitDocs,
  saveDocs,
  getStdSubmitDocsPresentation,
  updateSubmitStatus,
} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";

const router = express.Router();

router.get("/stdSubmitDoc", getStdSubmitDocs);
router.get("/stdSubmitDoc/:type", getStdSubmitDocsPresentation);
router.post("/stdSubmitDoc", saveDocs);
router.put("/stdSubmitDoc/:id", updateSubmitStatus);

export default router;
