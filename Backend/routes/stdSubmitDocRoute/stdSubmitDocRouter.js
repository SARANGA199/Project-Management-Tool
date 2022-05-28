import express from "express";
import {getStdSubmitDocs, saveDocs} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";

const router = express.Router();

router.get('/stdSubmitDoc',getStdSubmitDocs);
router.post('/stdSubmitDoc',saveDocs);

export default router;