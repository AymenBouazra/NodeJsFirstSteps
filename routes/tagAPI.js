
const express= require('express');
const router=express.Router();
const tag = require('../models/tag')
// 1- GET ALL tag
router.get('/tag', async (req, res) => {
    const tags = await tag.find()
    res.json(tags);
  });

// 2- GET tag BY ID 
router.get('/tag/:id', async (req, res) => {
    const findTag = await tag.findById(req.params.id)
    res.json(findTag);
  });

   
// 3- ADD tag
router.post('/tag', async (req, res) => {
    const createdTag = await tag.create(req.body);
    res.json(createdTag);
  });

// 4- UPDATE tag BY ID
 router.put('/tag/:id', async (req, res) => {
     const updateTag = await tag.findByIdAndUpdate(req.params.id)
    res.json(updateTag);
  });
// 5- DELETE tag BY ID
router.delete('/tag/:id', async (req, res) => {
    const deleteTag = await tag.findByIdAndDelete(req.params.id)
    res.json(deleteTag);
  });
module.exports = router;