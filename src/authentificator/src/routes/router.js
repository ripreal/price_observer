
const express = require('express');
const router = express.Router();
const UserService = require('../repo/userService');

// GET /
router.get('/', async (req, res, next) => {
    return res.send("working");
});

router.post('/register', async (req, res, next) => {
    if (req.body.password !== req.body.passwordConf) {

        let err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);

    } else if (req.body.email &&
        req.body.username &&
        req.body.password &&
         req.body.passwordConf) {

         let userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }

        let userService = new UserService();
        try {
            await userService.createUser(userData);
            return res.send("user registered!");
        } catch (error) {
            let err = new Error(error);
            err.status = 500;
            res.send(error.message);
            return next(err);
        }

    } else {
        let err = new Error("Not all body parameters were specified!");
        err.status = 400;
        res.send(error.message);
        return next(err);
    }
});

router.post('/login', async (req, res, next) => {
    if (req.body.logemail && req.body.logpassword) {
        let userService = new UserService();
        try { 
            userService.authenticate(req.body.logemail, req.body.logpassword, (err, result) => {
                let todo = "todo";
            });
        } catch(error) {
            let err = new Error(error);
            err.status = 500;
            res.send(error.message);
            return next(err);
        }
    } else {
        let err = new Error("Not all body parameters were specified!");
        err.status = 400;
        res.send(error.message);
        return next(err);
    }
});

module.exports = router; 