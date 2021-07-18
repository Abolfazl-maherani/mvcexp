var postModel = require('../models/postModel');

exports.post = function(req, res, next) {
    let postId = req.params.postname;
    let db = [];
    postModel.getPost(postId).then(val => {
        if (val.length == 1) {
            db = val[0];
        } else {
            db = val;
        }
        res.render("page/post", {
            title: (db.title === "string") ? db.title : "single page blog",
            db: db
        });





    })
}





exports.blog = function(req, res, next) {
    postModel.getPost().then(val => {
        res.render("page/blog", {
            db: val,
            title: "cart"
        })
    })
}