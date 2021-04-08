const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database001', {useNewUrlParser: true, useUnifiedTopology: true});