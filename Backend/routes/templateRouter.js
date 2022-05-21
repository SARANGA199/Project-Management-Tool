import express from 'express';
const router = express.Router();
import {addTemplate} from '../controllers/templateController/templateController.js'



router.post('/addMarking',addTemplate);

export default router;