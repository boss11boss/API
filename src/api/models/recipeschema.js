const mongoose = require('mongoose')

const recipeSchema = new  mongoose.Schema({
    dish:String,
    chef:String,
    image:String,
    description:String,
    ingredientsArray:[String],

},{timestamps:true})

module.exports = mongoose.model('recipe',recipeSchema)