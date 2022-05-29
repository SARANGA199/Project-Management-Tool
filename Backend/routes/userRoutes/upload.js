import express from 'express';
const router = express.Router();
import uploadImage from '../../middleware/uploadImage.js';
import uploadCtrl from '../../controllers/userController/uploadCtrl.js';
import auth from '../../middleware/auth.js';

router.post('/upload_image', uploadImage, uploadCtrl.uploadImg);

export default router;