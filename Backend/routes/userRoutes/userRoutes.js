import express from 'express';
const router = express.Router();
import userController from "../../controllers/userController/userController.js";
import auth from "../../middleware/auth.js";

router.post('/register',userController.register);

router.post('/login',userController.login);

router.get('/logout',userController.logout);

router.get('/refresh_token',userController.refreshToken);

router.get('/info', auth, userController.getUser);

router.post('/forgot', userController.forgotPassword);

router.post('/reset', auth, userController.resetPassword);

router.get('/all_infor', auth, userController.getUsersAllInfor);

router.patch('/update', auth, userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

export default router;