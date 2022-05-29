import express from "express";
import {
  getStdSubmitDocs,
  saveDocs,
  getStdSubmitDocsPresentation,
} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";

const router = express.Router();

router.get("/stdSubmitDoc", getStdSubmitDocs);
router.get("/stdSubmitDoc/:type", getStdSubmitDocsPresentation);
router.post("/stdSubmitDoc", saveDocs);

export default router;
