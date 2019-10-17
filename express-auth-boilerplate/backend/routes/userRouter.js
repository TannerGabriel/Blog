const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const router = express.Router()

router.post('/signin', userCtrl.signin)
router.post('/signup', userCtrl.signup)

module.exports = router