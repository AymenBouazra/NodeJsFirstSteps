const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    name:String,
    img:String, 
},
{
    timestamps :true,
    versionKey : false
})

module.exports = mongoose.model('upload',uploadSchema);