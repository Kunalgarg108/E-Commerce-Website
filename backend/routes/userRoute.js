import express from 'express';
import {  registerUser, loginUser,updateUserProfile ,adminLogin} from '../controllers/usercontroller.js';

const userRouter = express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/adminlogin', adminLogin);
userRouter.put('/profile', updateUserProfile);
export default userRouter;