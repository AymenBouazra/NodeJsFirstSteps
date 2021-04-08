
const express = require('express');
const router = express.Router();
const crud = require('../models/crud');
// 1- GET ALL TODOS
router.get('/crud', async (req, res) => {
  const crudTodo = await crud.find().populate('todos')
  res.json(crudTodo);
});

// 2- GET TODOS BY ID 
router.get('/crud/:id', async (req, res) => {
  const findUser = await crud.findById(req.params.id)
  res.json(findUser);
});
// filter by age greater than 20
router.get('/crud/filter/byage', async (req, res) => {
  const findUser = await crud.find().where('age').gt(20)
  res.json(findUser);
});
// filter by age greater than and equal 20
router.get('/crud/filter/byage', async (req, res) => {
  const findUser = await crud.find().where('age').gte(20)
  res.json(findUser);
});
// filter by age less than 20
router.get('/crud/filter/byage', async (req, res) => {
  const findUser = await crud.find().where('age').lt(20)
  res.json(findUser);
});
// filter by age less than  and equal 20
router.get('/crud/filter/byage', async (req, res) => {
  const findUser = await crud.find().where('age').lte(20)
  res.json(findUser);
});
// filter with or query
router.get('/crud/filter/or', async (req, res) => {
  const findUser = await crud.find().or([{ age: 26 }, { age: 19 }])
  res.json(findUser);
});
// filter with or query
router.get('/crud/filter/and', async (req, res) => {
  const findUser = await crud.find().and([{ age: 26 }, { firstName: 'Aymen' }])
  res.json(findUser);
});


// 3- ADD TODO
router.post('/crud', async (req, res) => {
  const createdUser = await crud.create(req.body);
  res.json({ createdUser });
});

// 4- UPDATE TODO BY ID
router.put('/crud/:id', async (req, res) => {
  const updateUser = await crud.findByIdAndUpdate(req.params.id, { firstName: 'Nadhem' })
  res.json(updateUser);
});
// 5- DELETE TODO BY ID
router.delete('/crud/:id', async (req, res) => {
  const deleteUser = await crud.findByIdAndDelete(req.params.id)
  res.json(deleteUser);
});

router.put('/crud/affectTodo/:idTodo/:idUser', async (req, res) => {
  const updateUser = await crud.findByIdAndUpdate(req.params.idUser,{$push: {todos: req.params.idTodo}},{new : true})
  res.json({message: 'Todo affected to user'})
})
router.put('/crud/disaffectTodo/:idTodo/:idUser', async (req, res) => {
  const updateUser = await crud.findByIdAndUpdate(req.params.idUser,{$pull: {todos: req.params.idTodo}},{new : true})
  res.json({message: 'Todo disaffected to user'})
})



module.exports = router;