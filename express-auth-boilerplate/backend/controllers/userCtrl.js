const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            email: req.body.email,
            password: hash,
        })
        user.save().then(() => {
            const token = jwt.sign({
                userId: user._id
            }, 'RANDOM_TOKEN_SECRET', {
                expiresIn: '24h'
            })
            res.status(201).json({
                message: 'Succesfully created user',
                token: token
            })
        }).catch((error) => {
            res.status(400).json({
                error: error,
            })
        })
    })
}

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if (!user) {
            return res.status(500).json({
                error: new Error('Incorrect email'),
            })
        }
        bcrypt.compare(req.body.password, user.password).then((valid) => {
            if (!valid) {
                return res.status(500).json({
                    error: new Error('Wrong password!'),
                })
            }
            const token = jwt.sign({
                userId: user._id
            }, 'RANDOM_TOKEN_SECRET', {
                expiresIn: '24h'
            })
            res.status(201).json({
                userId: user._id,
                token: token,
            })
        }).catch((error) => {
            res.status(400).json({
                error: error,
            })
        })
    }).catch((error) => {
        res.status(400).json({
            error: error,
        })
    })
}

exports.checkAuthState = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                return res.status(200).json({
                    success: true,
                    message: 'Token is valid'
                });
                // next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
}