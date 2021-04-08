const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    users:[{type:mongoose.Schema.Types.ObjectId, ref: 'todos'}]
})

module.exports = mongoose.model('todo',todoSchema);