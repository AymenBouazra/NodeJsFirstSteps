const mongoose = require('mongoose');
const crud = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    age:Number,
    todos:[{type:mongoose.Schema.Types.ObjectId, ref: 'crud'}]
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('crud',crud);