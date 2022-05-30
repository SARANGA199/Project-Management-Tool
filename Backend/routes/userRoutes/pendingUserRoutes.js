import express from 'express';
const router = express.Router();
import pendingUserController from "../../controllers/userController/pendingUserController.js";

router.post('/register',pendingUserController.register);

router.get('/getall',pendingUserController.getAllInfo);

router.delete('/delete/:id', pendingUserController.deleteUser);

export default router;