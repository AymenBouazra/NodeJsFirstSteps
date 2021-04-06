const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.json({message:'Hello Bouazra'});
});

// 1- GET ALL TODOS
app.get('/todos', async (req, res) => {
    res.json({message:'Get all todos'});
  });

// 2- GET TODOS BY ID 
app.get('/todos/:id', async (req, res) => {
    res.json({message:'Get todos by id'});
  });

// 3- ADD TODO
app.post('/todos', async (req, res) => {
    res.json({message:'add todo'});
  });

// 4- UPDATE TODO BY ID
 app.put('/todos/:id', async (req, res) => {
    res.json({message:'update todo by id '});
  });
// 5- DELETE TODO BY ID
app.delete('/todos/:id', async (req, res) => {
    res.json({message:'delete todo by id'});
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});