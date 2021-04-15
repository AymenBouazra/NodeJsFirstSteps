
const express= require('express');
const router=express.Router();
const passport = require('passport')
const Todo = require('../models/todoSchema')
// 1- GET ALL TODOS
router.get('/todos',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const Todos = await Todo.find().populate('todo')
    res.json(Todos);
  });

// 2- GET TODOS BY ID 
router.get('/todos/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const findTodo = await Todo.findById(req.params.id)
    res.json(findTodo);
  });

   
// 3- ADD TODO
router.post('/todos',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const createdTodo = await Todo.create(req.body);
    res.json({createdTodo});
  });

// 4- UPDATE TODO BY ID
 router.put('/todos/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
     const updateTodo = await Todo.findByIdAndUpdate(req.params.id,{firstName:'Nadhem'})
    res.json(updateTodo);
  });
// 5- DELETE TODO BY ID
router.delete('/todos/:id',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id)
    res.json(deleteTodo);
  });

router.put('/todos/affectUser/:idUser/:idTodo',passport.authenticate('bearer',{session:false}), async (req,res)=> {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.idTodo,{$push: {users:req.params.idUser}},{new: true})
    res.json({message : 'User affected'})
})
router.put('/todos/disaffectUser/:idUser/:idTodo',passport.authenticate('bearer',{session:false}), async (req,res)=> {
  const updateTodo = await Todo.findByIdAndUpdate(req.params.idTodo,{$pull: {users:req.params.idUser}},{new: true})
  res.json({message : 'User affected'})
})

module.exports = router;