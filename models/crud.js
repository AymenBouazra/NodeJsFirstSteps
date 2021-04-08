const mongoose = require('mongoose');
const crud = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    age:Number
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('crud',crud);