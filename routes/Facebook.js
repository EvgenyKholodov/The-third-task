const express = require('express');
var router = express.Router();


router.get('/facebook',
    passport.authenticate('facebook'));

router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/profile',
        failureRedirect: '/' }));

module.exports = router;
