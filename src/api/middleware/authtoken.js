const jwt  = require('jsonwebtoken')

exports.isLoggedIn = (req,res,next)=>{
    const token = req.header('auth-token')
    console.log(token)
    if(!token) return res.status(401).json({error:'Access Denied'})
    try {
        const verified = jwt.verify(token,process.env.SECRET_KEY_JWT)
        req.user = verified.userFound
        next()
    } catch (error) {
        let message =''
        if(!req.user) message='Session Timeout'
        else message = error
        res.status(500).json({error:message})
    }
}