const mongoose = require('mongoose');
const tag = mongoose.Schema({
    title:String,
    description:String,
    tutorials:[{type:mongoose.Schema.Types.ObjectId, ref: 'tutorials'}]
},
{
    timestamps :true,
    versionKey : false
})

module.exports = mongoose.model('tag',tag);