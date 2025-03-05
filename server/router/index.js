const express=require('express');
const router=express.Router();
const Ccarwash=require('../controller/carsignup');
const Ccarlogin=require('../controller/carlogin');
const Cusersignup = require('../Controller/usersignup')
const Ccarbooking=require('../Controller/userbooking')

//post api for car sign up page
router.get('/getcarsignup',Ccarwash.getuserdata)
router.post('/carsignup',Ccarwash.insertdata)
//post api for car login page
router.post('/carlogin',Ccarlogin.insertuserdata)
router.post('/getusersignup',Cusersignup.insertdata)
router.post('/getuserlogin',Cusersignup.loginUser)
//car booking apis
router.post('/insertbooking',Ccarbooking.bookCarService)
//api for user profile edit
router.get('/getuserdata',Cusersignup.getUserByEmail)
//api for showing booking details to user
router.get('/getuserbooking',Ccarbooking.getBookingByEmail)
//api for updating the profile of the user
router.put('/updateuser',Cusersignup.updateUserProfile)
module.exports=router