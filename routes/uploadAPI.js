const multer = require('multer');
const express = require('express')
const router = express.Router();
const path = require('path');
const fs = require('fs')
const user= require('../models/crud')
//file filter
const fileFilter = (req, file, cb) => {
    allowedExtensions = ['.png', '.PNG', '.jpg', '.jpeg', '.gif']
    const extension = path.extname(file.originalname);
    cb(null, allowedExtensions.includes(extension))
}
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.resolve('./uploads')
        cb(null, folder)
    },
    filename: async (req, file, cb) => {
        const extension = path.extname(file.originalname);
        console.log(extension);
        const newFileName = file.fieldname + '-' + Date.now() + extension
        await user.findByIdAndUpdate(req.params.id,{photo : newFileName})
        cb(null, newFileName)
    }
});
const upload = multer({ storage: myStorage, fileFilter: fileFilter , limits:{fileSize:1024*1024*20}})
router.post('/uploadImage/:id', upload.single('img'), async (req, res) => {
    res.json({ image: 'image' })
});

router.post('/uploadMultipleImages', upload.array('img',4), async (req, res) => {
    res.json({ image: 'image' })
});
module.exports = router