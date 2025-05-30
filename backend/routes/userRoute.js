import express from 'express';
import { registerUser,loginUser, getProfile, updateProfile,bookAppointment, listAppointment, cancelAppointment } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';



const userRouter = express.Router()


// Route to register a user
userRouter.post('/register', registerUser)
// Route to login a user
userRouter.post('/login', loginUser)
// Route to get user details (protected route)
userRouter.get('/get-profile',authUser,getProfile)
// Route to update user profile (protected route)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
// Route to book an appointment (protected route)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
// Route to cancel an appointment (protected route)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)





export default userRouter;