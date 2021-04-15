const express = require('express');
const router = express.Router();
const tag = require('../models/tag')
const passport = require('passport')
// 1- GET ALL tag
router.get('/tag',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const tags = await tag.find().populate('Tutorials')
  res.json(tags);
});

// 2- GET tag BY ID 
router.get('/tag/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const findTag = await tag.findById(req.params.id)
  res.json(findTag);
});


// 3- ADD tag
router.post('/tag',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const createdTag = await tag.create(req.body);
  res.json(createdTag);
});

// 4- UPDATE tag BY ID
router.put('/tag/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const updateTag = await tag.findByIdAndUpdate(req.params.id)
  res.json(updateTag);
});
// 5- DELETE tag BY ID
router.delete('/tag/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const deleteTag = await tag.findByIdAndDelete(req.params.id)
  res.json(deleteTag);
});


router.put('/tag/affectTuto/:idTuto/:idTag',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const updateTag = await tag.findByIdAndUpdate(req.params.idTag,{$push:{tutorials:req.params.idTuto}},{new:true})
  res.json({ message: 'Tutorial affected' });
});
router.put('/tag/disaffectTuto/:idTuto/:idTag',passport.authenticate('bearer',{session:false}), async (req, res) => {
  const updateTag = await tag.findByIdAndUpdate(req.params.idTag,{$pull:{tutorials:req.params.idTuto}},{new:true})
  res.json({ message: 'Tutorial disaffected' });
});
module.exports = router;