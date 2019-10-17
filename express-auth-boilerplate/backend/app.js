const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const userRouter = require('./routes/userRouter')

app.use('/auth', userRouter)

module.exports = app