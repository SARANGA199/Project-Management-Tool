import express from 'express';
const router = express.Router();
<<<<<<< HEAD
import {addTemplate,displayTemplate} from '../controllers/templateController/templateController.js'



router.post('/addtemplate',addTemplate);
router.get('/display',displayTemplate);
=======
import {addTemplate} from '../controllers/templateController/templateController.js'



router.post('/addMarking',addTemplate);
>>>>>>> d0fa2a1da09751a5ec488834d01a65f0052fc183

export default router;