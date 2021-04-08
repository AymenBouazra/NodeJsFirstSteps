const mongoose = require('mongoose');
const tutorial = mongoose.Schema({
    title:String,
    description:String,
    tags:[{type:mongoose.Schema.Types.ObjectId, ref: 'tag'}]
},
{
    timestamps :true,
    versionKey : false
})

module.exports = mongoose.model('tutorial',tutorial);