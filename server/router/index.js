const express=require('express');
const router=express.Router();
const Ccarwash=require('../controller/carsignup');
const Ccarlogin=require('../controller/carlogin');
// const Cusersignup = require('../Controller/usersignup')
const Ccarbooking=require('../Controller/userbooking')
const booking = require('../Controller/booking')
//post api for car sign up page
router.get('/getcarsignup',Ccarwash.getuserdata)
router.post('/carsignup',Ccarwash.insertdata)
//post api for car login page
router.post('/carlogin',Ccarlogin.insertuserdata)
// router.post('/getusersignup',Cusersignup.insertdata)
// router.post('/getuserlogin',Cusersignup.loginUser)
//car booking apis
router.post('/insertbooking',Ccarbooking.bookCarService)
//api for user profile edit
router.get('/getuserdata',Cusersignup.getUserByEmail)
//api for showing booking details to user
router.get('/getuserbooking',Ccarbooking.getBookingByEmail)
//api for updating the profile of the user
router.put('/updateuser',Cusersignup.updateUserProfile)
//api for contact us page 
router.post('/usercontactus', Ccarbooking.contactUs)
// api to get all user data in admin panel
router.get('/getalluserdata',Cusersignup.getuserdata)
//api to delete user in admin panel
router.delete('/deleteuser/:email',Cusersignup.deleteuser)
//api to get all booking details in admin pannel
router.get('/getallbooking',Ccarbooking.getAllBookings)
//api to get contact us details
router.get('/getcontact',Ccarbooking.getAllContactSubmissions)
//api for booking slot timing 
// router.get('/getbookslot',Ccarbooking.getBookedSlots)
// api for car brand
router.post('/carbrand',booking.addCarBrandAndType)
module.exports=router