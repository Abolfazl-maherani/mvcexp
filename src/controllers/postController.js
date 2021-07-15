var postModel = require('../models/postModel');
postModel.getPost().then(val => {
    console.log(val[0])
})
exports.getTitle = function(req, res, next) {

    postModel.getPostTitle().then(val => {
        res.render("post/title", {
            db: val
        });


    })

}

exports.getPost = function(req, res, next) {
    postModel.getPost().then(val => {
        res.render("post/index", {
            db: val,
            title: "cart"
        })
    })
}