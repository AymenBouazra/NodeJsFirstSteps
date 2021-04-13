const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUploader} = require('../controllers/fileuploderController');
const router = express.Router();
router.post('/singleFile',upload.single('file'),singleFileUploader);
module.exports = {
    routes: router
}