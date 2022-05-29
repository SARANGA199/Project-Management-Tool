import express from "express";
// import {getStdSubmitDocs, saveDocs} from "../../controllers/stdSubmitDocController/stdSubmitDocController.js";
import {addTopicDoc,displayTopicDoc,getOneTopicDoc} from "../../controllers/topicDocSubmitController/topicDocSubmitController.js";

const router = express.Router();

// router.get('/stdSubmitDoc',getStdSubmitDocs);
// router.post('/stdSubmitDoc',saveDocs);

router.post('/addTopicDoc',addTopicDoc);
router.get('/displayTopicDoc',displayTopicDoc);
router.get('/displayTopicDoc/:id',getOneTopicDoc);

export default router;