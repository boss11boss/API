const {HomepageService,SignupService,SigninService} = require('../services/userservices')


exports.HomepageController=(req,res)=>{ 
    HomepageService()
    .then(message=>res.status(201).json(message))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
}

exports.SignupController=(req,res)=>{ 
    SignupService(req.body)
    .then(user=>res.status(200).json({message:'New User Created',user}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
}

exports.SigninController=(req,res)=>{ 
    SigninService(req,req.body)
    .then(user=>res.status(201).json({message:'User Logged In',user}))
    .catch(err=>res.status(501).json({message:'Something Went Wrong',err}))
}