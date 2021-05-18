const Recipe = require('../models/recipeschema')

exports.CreateRecipeService=(body)=>{
    const {dish, chef,description,ingredientsArray,image} = body
    const newRecipe = new Recipe({dish, chef,description,ingredientsArray,image})
    
    return new Promise((resolve, reject) =>{
        Recipe.findOne({dish})
        .then(recipy=>{
            if(recipy) return reject('Recipe Already Exist')
            newRecipe.save()
            .then(recipeCreated=>resolve(recipeCreated))
            .catch(err=>reject(err))
            
        })
        .catch(err=>reject(err))

    })
        
        
}

exports.SingleRecipeService=(id)=>{
    
    return new Promise((resolve, reject) =>{
        Recipe.findOne({_id:id})
        .then(recipeFound=>resolve(recipeFound))
        .catch(err=>reject(err))

    })
        
        
}


exports.ReadService=()=>{
    
    return new Promise((resolve, reject) =>{
        Recipe.find()
        .then(recipiesFound=>resolve(recipiesFound))
        .catch(err=>reject(err))

    })
        
        
}

exports.UpdateService=(id,body)=>{
    
    const {dish, chef,description,ingredientsArray,image} = body
    const updateRecipe = {dish, chef,description,ingredientsArray,image}
    

    return new Promise((resolve, reject) =>{
        Recipe.findOneAndUpdate({_id:id},{ $set : updateRecipe},{new:true})
        .then(UpdateR=>resolve(UpdateR))
        .catch(err=>reject(err))

    })
        
        
}


exports.DeleteService=(id)=>{
    
    return new Promise((resolve, reject) =>{
        Recipe.findOneAndDelete({_id:id})
        .then(DeletedRecipe=>resolve(DeletedRecipe))
        .catch(err=>reject(err))

    })
        
        
}