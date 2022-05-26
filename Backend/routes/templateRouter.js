import express from 'express';
const router = express.Router();
import {addTemplate,displayTemplate} from '../controllers/templateController/templateController.js'



router.post('/addtemplate',addTemplate);
router.get('/display',displayTemplate);

export default router;