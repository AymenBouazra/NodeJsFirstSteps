const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;


//cors config
app.use(cors())
//morgan config
app.use(morgan('dev'))
// body parser onfig
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//import connection to database
const connect=require('./database/connect')
const todoAPI = require('./routes/todoAPI');
const userAPI = require('./routes/userApi');
const userDetailsAPI = require('./routes/userDetailsAPI')
const tutorialAPI = require('./routes/tutorialAPI')
const tagAPI = require('./routes/tagAPI')
app.get('/', async (req, res) => {
    
  res.json({message:'Hello World'});
});

//use routing
app.use('',todoAPI);
app.use('',userAPI)
app.use('',userDetailsAPI)
app.use('',tutorialAPI)
app.use('',tagAPI)
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});