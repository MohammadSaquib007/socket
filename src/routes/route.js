const express=require("express")
const route=express.Router()
const userController=require('../controllers/userController')
route.post('/create',userController.userRegistration)
route.get('/get', userController.getUser);

module.exports=route