const {RecipeValidator} = require('../validations/recipevalidator')
const {CreateRecipeService} = require('../services/recipeservices')
const {SingleRecipeService} = require('../services/recipeservices')
const {ReadService} = require('../services/recipeservices')
const {UpdateService} = require('../services/recipeservices')
const {DeleteService} = require('../services/recipeservices')






exports.CreateRecipeController=(req,res)=>{
    const {value,error} =RecipeValidator(req.body)

    if(error) return res.status(402).json({error:error.details.map(d=>d.message)})
    
    CreateRecipeService(value)
    .then(recipe=>res.status(201).json({message:'New Recipe Created',recipe}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    
}

exports.SingleRecipeController=(req,res)=>{
    
    
    SingleRecipeService(req.params.id)
    .then(recipe=>res.status(201).json({message:'Recipe Found',recipe}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    
}


exports.ReadController=(req,res)=>{
    
    
    ReadService()
    .then(recipe=>res.status(201).json({message:'All Recipies are Found',recipe}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    
}


exports.UpdateController=(req,res)=>{
    const {value,error} =RecipeValidator(req.body)

    if(error) return res.status(402).json({error:error.details.map(d=>d.message)})
    
    UpdateService(req.params.id,value)
    .then(recipe=>res.status(200).json({message:'Updated Successfully',recipe}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    
}

exports.DeleteController=(req,res)=>{
    
    
    DeleteService(req.params.id)
    .then(recipe=>res.status(201).json({message:'Deleted Successfully',recipe}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
    
}