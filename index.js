const express = require('express');
const morgan = require('morgan');
const path = require('path')
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
const tagAPI = require('./routes/tagAPI');
const uploadAPI = require('./routes/uploadAPI')
const emailAPI = require('./routes/emailAPI')
const schedule = require('./schedule')
const authAPI = require('./routes/authAPI')
const passport = require('./passport/passport')
require('dotenv').config()

app.get('/', async (req, res) => {
    
  res.json({message:'Hello World'});
});
//static files 
app.use(express.static(__dirname + '/uploads'))
//use routing
app.use('',todoAPI);
app.use('',userAPI)
app.use('',userDetailsAPI)
app.use('',tutorialAPI)
app.use('',tagAPI);
app.use('',emailAPI)
app.use('',uploadAPI)
app.use('',authAPI)
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});