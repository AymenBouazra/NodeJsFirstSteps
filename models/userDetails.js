const mongoose = require('mongoose');
const userDetails = mongoose.Schema({
    address:String,
    Zipcode:String,
    city:String
},
{
    timestamps :true,
    versionKey : false
});

module.exports = mongoose.model('userDetails',userDetails);