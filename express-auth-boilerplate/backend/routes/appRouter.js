const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/login', (req, res) => {
    res.render('login', {
        message: req.flash('loginMessage')
    });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
        message: req.flash('signupMessage')
    });
});

module.exports = router