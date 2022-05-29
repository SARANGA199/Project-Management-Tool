import express from "express";
// import {getStdSubmitDocs, saveDocs} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";
import {addTopicDoc,displayTopicDoc} from "../../controllers/topicDocSubmitController/topicDocSubmitController.js";

const router = express.Router();

// router.get('/stdSubmitDoc',getStdSubmitDocs);
// router.post('/stdSubmitDoc',saveDocs);

router.post('/addTopicDoc',addTopicDoc);
router.get('/displayTopicDoc',displayTopicDoc);

export default router;