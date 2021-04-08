
const express= require('express');
const router=express.Router();
const Tutorial = require('../models/tutorial')
// 1- GET ALL Tutorial
router.get('/tutorial', async (req, res) => {
    const Tutorials = await Tutorial.find()
    res.json(Tutorials);
  });

// 2- GET Tutorial BY ID 
router.get('/tutorial/:id', async (req, res) => {
    const findTutorial = await Tutorial.findById(req.params.id)
    res.json(findTutorial);
  });

   
// 3- ADD Tutorial
router.post('/tutorial', async (req, res) => {
    const createdTutorial = await Tutorial.create(req.body);
    res.json({createdTutorial});
  });

// 4- UPDATE Tutorial BY ID
 router.put('/tutorial/:id', async (req, res) => {
     const updateTutorial = await Tutorial.findByIdAndUpdate(req.params.id)
    res.json(updateTutorial);
  });
// 5- DELETE Tutorial BY ID
router.delete('/tutorial/:id', async (req, res) => {
    const deleteTutorial = await Tutorial.findByIdAndDelete(req.params.id)
    res.json(deleteTutorial);
  });
module.exports = router;