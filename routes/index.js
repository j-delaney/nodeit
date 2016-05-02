var express = require('express');
var router = express.Router();
var util = require('util');

var data = require('../data.json');

router.get('/', function (request, response) {
    response.render('index', {
        title: 'Nodeit'
    });
});

module.exports = router;
