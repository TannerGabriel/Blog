const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const userRouter = require('./routes/userRouter')
const appRouter = require('./routes/appRouter')

app.use('/auth', userRouter)
app.use('/', appRouter)

module.exports = app