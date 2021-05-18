const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String
}, {timestamps:true})

module.exports = mongoose.model('user',userSchema)