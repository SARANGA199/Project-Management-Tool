import express from 'express';
const router = express.Router();
import {addMarkingScheme} from '../controllers/markingControllers/markingController.js'



router.post('/addMarking',addMarkingScheme);

export default router;