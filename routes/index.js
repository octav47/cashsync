var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', {title: 'Express'});
    if (req.authenticated) {
        res.status(200).render('index', {
            title: 'Express',
            pageData: {
                user: req.authentication.user
            }
        });
    } else {
        res.status(401).send();
    }
});

module.exports = router;