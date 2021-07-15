var postModel = require('../models/postModel');

exports.getTitle = function(req, res, next) {
    postModel.getPostTitle().then(val => {
        res.render("index", {
            title: val
        });
    })

}