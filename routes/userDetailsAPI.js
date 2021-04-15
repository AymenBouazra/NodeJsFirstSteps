
const express= require('express');
const router=express.Router();
const userDetails = require('../models/userDetails');
const passport = require('passport')
// 1- GET ALL userDetails
router.get('/userDetails',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const details = await userDetails.find()
    res.json(details);
  });

// 2- GET userDetails BY ID 
router.get('/userDetails/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const findUserDetails = await userDetails.findById(req.params.id)
    res.json(findUserDetails);
  });

   
// 3- ADD userDetails
router.post('/userDetails',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const createdUserDetails = await userDetails.create(req.body);
    res.json({createdUserDetails});
  });

// 4- UPDATE userDetails BY ID
 router.put('/userDetails/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
     const updateUserDetails = await userDetails.findByIdAndUpdate(req.params.id,{address:"address-5",Zipcode:"zipcode-5",city:"city-5"})
    res.json(updateUserDetails);
  });
// 5- DELETE userDetails BY ID
router.delete('/userDetails/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const deleteUserDetails = await userDetails.findByIdAndDelete(req.params.id)
    res.json(deleteUserDetails);
  });
module.exports = router;