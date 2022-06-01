import express from "express";
import {
  getStdSubmitDocs,
  saveDocs,
  getStdSubmitDocsPresentation,
  updateSubmitStatus,
  addDoc,
  displayDoc
} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";

const router = express.Router();

router.get("/stdSubmitDoc", getStdSubmitDocs);
router.get("/stdSubmitDoc/:type", getStdSubmitDocsPresentation);
router.post("/stdSubmitDoc", saveDocs);
router.put("/stdSubmitDoc/:id", updateSubmitStatus);
router.post('/addDoc',addDoc);
router.get('/displayDoc',displayDoc);

export default router;
