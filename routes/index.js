var express = require('express');
var router = express.Router();
var util = require('util');

var data = require('../data.json');

router.get('/', function (request, response) {
    response.render('index', {
        title: 'Nodeit',
        posts: data.posts
    });
});

router.post('/api/like', function (request, response) {
    var index = request.body.index;

    data.posts[index].likes++;

    response.sendStatus(200);
});

module.exports = router;
