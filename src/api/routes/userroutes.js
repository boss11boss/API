const router = require('express').Router()
const {HomepageController,SignupController,SigninController} = require('../controllers/usercontrollers')
const {isLoggedIn} = require('../middleware/authtoken')


/*
 * @route  GET  /user/
 * @desc  User Homepage(Test Route)
 * @access  Public  
*/
router.get('/',isLoggedIn,HomepageController)


/*
 * @route  POST  /user/signup
 * @desc  Creates the new user
 * @access  Public  
*/
router.post('/signup',SignupController)


/*
 * @route  POST  /user/signin
 * @desc  Login the existing user
 * @access  Public  
*/
router.post('/signin',SigninController)

module.exports = router