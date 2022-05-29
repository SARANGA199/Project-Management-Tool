import express from "express";
import {addDoc,displayDoc} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";

const router = express.Router();

// router.get('/stdSubmitDoc',getStdSubmitDocs);
// router.post('/stdSubmitDoc',saveDocs);

router.post('/addDoc',addDoc);
router.get('/displayDoc',displayDoc);

export default router;