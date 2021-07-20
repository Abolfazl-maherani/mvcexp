var postModel = require('../models/postModel');
var menuModel = require('../models/menuModel');
const { post } = require('../../app');

exports.index = function(req, res) {
    res.render("index", {
        title: "dashboard"
    });
}