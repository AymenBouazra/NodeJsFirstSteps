const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

//import connection to database
// const connect = require('./database/connect');
//cors config
app.use(cors())
//morgan config
app.use(morgan('dev'))
// body parser onfig
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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