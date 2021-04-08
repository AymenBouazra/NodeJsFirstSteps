const mongoose = require('mongoose');
const tag = mongoose.Schema({
    title:String,
    description:String
},
{
    timestamps :true,
    versionKey : false
})

module.exports = mongoose.model('tag',tag);