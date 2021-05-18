const User = require('../models/userschema') 
var bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken')


exports.HomepageService=(req,res)=>{
    return new Promise((resolve,reject)=>{
        resolve("THIS is home page for testing purpose")
    })
}

exports.SignupService=(body)=>{
    const {name,username,email,password} = body
    const newUser = new User({name,username,email,password})
    return new Promise((resolve, reject) =>{
        User.findOne({username})
        .then(user=>{
            if(user) return reject('User Already Exist')
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    newUser.password = hash
                    newUser.save()
                    .then(userCreated=>resolve(userCreated))
                    .catch(err=>reject(err))
                });
            });


            
        })
        .catch(err=>reject(err))
    })       
}


exports.SigninService=(req,body)=>{
    const {username,password} = body
    return new Promise((resolve, reject) =>{
        User.findOne({username})
        .then(userFound=>
            {
                if(!userFound) return reject("User NOT Found")
                bcrypt.compare(password,userFound.password, function(err, res) {
                    if(!res) return reject("Password incorrect")
                    const token = jwt.sign({userFound},process.env.SECRET_KEY_JWT, { expiresIn: 60 * 60 });
                    req.header('auth-token',token)
                    resolve(token)
                });
                
            })
        .catch(err=>reject(err))
    })
}