import express from 'express';
const router = express.Router();
import userController from "../../controllers/userController/userController.js";
import auth from "../../middleware/auth.js";

router.post('/register',userController.register);

router.post('/login',userController.login);

router.get('/logout',userController.logout);

router.get('/refresh_token',userController.refreshToken);

router.get('/info', auth, userController.getUser);

export default router;