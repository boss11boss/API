require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')


//database connection
require('./database')


//bodyparser configuration
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//routes
app.use('/user', require('../api/routes/userroutes'))
app.use('/recipe', require('../api/routes/reciperoutes'))




app.listen(process.env.PORT,console.log(`Server is running at ${process.env.PORT}`))