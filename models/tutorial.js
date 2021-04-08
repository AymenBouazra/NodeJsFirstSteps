const mongoose = require('mongoose');
const tutorial = mongoose.Schema({
    title:String,
    description:String
    
},
{
    timestamps :true,
    versionKey : false
})

module.exports = mongoose.model('tutorial',tutorial);