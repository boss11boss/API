const router = require('express').Router()
const {
    CreateRecipeController,
    SingleRecipeController,
    ReadController,
    UpdateController,
    DeleteController
} = require('../controllers/recipecontrollers')


/*
 * @route  POST  /recipe/create
 * @desc  Creates the new recipe
 * @access  Public  
*/

router.post('/create',CreateRecipeController)




/*
 * @route  POST  /recipe/singlerecipe/:id
 * @desc  Reads the single recipe a/c to given id
 * @access  Public  
*/

router.post('/singlerecipe/:id',SingleRecipeController)

/*
 * @route  POST  /recipe/read
 * @desc  Reads all the recipes
 * @access  Public  
*/

router.post('/read',ReadController)


/*
 * @route  PATCH  /recipe/update/:id
 * @desc  Update the existing recipe a/c to given id
 * @access  Public  
*/

router.patch('/update/:id',UpdateController)




/*
 * @route  DELETE  /recipe/delete/:id
 * @desc  Deletes the single recipe a/c to given id
 * @access  Public  
*/

router.delete('/delete/:id',DeleteController)

module.exports = router