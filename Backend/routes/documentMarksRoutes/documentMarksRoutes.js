import express from "express";
const router = express.Router();
import {
    addDocumentMark,
    getDocumentMarks,
} from "../../controllers/evaluateDocumentController/evaluateDocumentController.js";

router.post("/adddocmarks", addDocumentMark);
router.get("/getdocmarks", getDocumentMarks);

export default router;