import express from 'express';
const router = express.Router();
import userController from "../../controllers/userController/userController.js";
import auth from "../../middleware/auth.js";

router.post('/register',userController.register);

router.post('/activation', userController.activateEmail);

router.post('/accept',userController.accept);

router.post('/login',userController.login);

router.get('/logout',userController.logout);

router.get('/refresh_token',userController.refreshToken);

router.get('/info', auth, userController.getUser);

router.post('/forgot', userController.forgotPassword);

router.post('/reset', auth, userController.resetPassword);

router.get('/all_infor', auth, userController.getUsersAllInfor);

router.patch('/update', auth, userController.updateUser);

router.put('/updateUsr/:id', userController.updateAUser);

router.delete('/delete/:id', userController.deleteUser);

router.get('/info/:researchArea', userController.getPanelMembers);

router.get('/infoSupervisor/:researchArea', userController.getSupervisorMembers);
router.get('/all_users', userController.getAllInfo);

export default router;