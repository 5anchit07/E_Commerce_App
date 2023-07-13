import express from 'express'
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, getAllOrdersController, getOrdersController} from '../controllers/authController.js'
import { isAdmin,requireSignIN } from '../middlewares/authMiddleware.js'
//router object
const router=express.Router()


//routing
//register||method post
router.post('/register',registerController)

//test routes
router.get('/test', requireSignIN, isAdmin,testController)

//login||post
router.post('/login',loginController);

//forget password||post
router.post('/forgot-password', forgotPasswordController)


//protected user routes auth
router.get("/user-auth", requireSignIN, (req,res) =>{
    res.status(200).send({ok: true});
} )
//for admin
router.get("/admin-auth", requireSignIN, isAdmin,(req,res) =>{
    res.status(200).send({ok: true});
} )

//update profile
router.put("/profile", requireSignIN, updateProfileController);

//orders
router.get("/orders", requireSignIN, getOrdersController);

//all orders
router.get("/all-orders", requireSignIN, isAdmin, getAllOrdersController);

export default router
