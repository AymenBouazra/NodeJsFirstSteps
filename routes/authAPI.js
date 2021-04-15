const express = require('express');
const router = express.Router();
const User = require('../models/crud')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//login
router.post('/login', async (req, res) => {

    res.json({ message: 'Logged In successfully !' })
})
router.post('/register', async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email })
    console.log(userExist);
    if (userExist !== null) {
        res.status(400).json({ message: 'An error occured , email already exist !' })
    } else {
        bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
            if (err) {
                res.json({ error: err })
            }
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPass,
                age: req.body.age,
                photo: req.body.photo
            })
            user.save()
                .then(user => { res.status(201).json({ message: 'Registered Successfully' }) }).catch(error => { res.json({ message: 'An error occured !' }) })

        })
    }


})
router.get('/register', async (req,res)=>{
    const users = await User.find()
    res.json(users)
})

module.exports = router;