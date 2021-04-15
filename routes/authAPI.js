const express = require('express');
const router = express.Router();
const User = require('../models/crud')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//login
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (error, result) => {
                    if (error) {
                        res.json({message: error})
                    }
                    if(result){
                        const token = jwt.sign({name:user.firstName},'verySecretValue',{expiresIn: '1h'})
                        res.json({message:'Successfully logged in !',token })
                    }else{
                        res.json({ message: 'Please verify your email or password !' })
                    }
                })
            } else {
                res.json({ message: 'Please verify your email or password ! ' })
            }
        })
    // res.json({ message: 'Logged In successfully !' })
})
router.post('/register', async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email })
    console.log(userExist);
    if (userExist !== null) {
        res.status(400).json({ message: 'An error occured , email already exist !' })
    } else {
        bcrypt.hash(req.body.password, 4, (err, hashedPass) => {
            if (err) {
                res.status(500).json({ message: 'Server Error! ' })
            }
            req.body.password = hashedPass
            // const user = new User({
            //     firstName: req.body.firstName,
            //     lastName: req.body.lastName,
            //     email: req.body.email,
            //     password: hashedPass,
            //     age: req.body.age,
            //     photo: req.body.photo
            // })
            // user.save()
            User.create(req.body)
                .then(user => { res.status(201).json({ message: 'Registered Successfully' }) })
                .catch(error => { res.json({ message: 'An error occured !' }) })
        })
    }
})
router.get('/register', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

module.exports = router;