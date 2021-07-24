var postModel = require('../models/postModel');
var menuModel = require('../models/menuModel');




exports.post = [function(req, res, next) {
        let page = {};
        let postId = req.params.postname;


        postModel.getPost(postId).then(val => {
            if (val.length == 1) {
                res.locals.db = val[0];
            } else {
                res.locals.db = val;
            }


            res.locals.title = (res.locals.db.title === "string") ? res.locals.db.title : "single page blog";

            next();
        })


    }, function(req, res, next) {
        postModel.prevpost(req.params.postname).then(val => {
                res.locals.prev = val[0];
                next();
            },

            reje => {
                res.locals.prev = ""
                next();
            }

        )


    },

    function(req, res) {
        postModel.nextpost(req.params.postname).then(val => {

                res.locals.next = val[0];
                res.render("page/post");

            },
            reje => {
                res.locals.next = ""
                res.render("page/post");
            }

        )

    }
]





exports.blog = function(req, res, next) {
    postModel.getPost().then(val => {
        res.render("page/blog", {
            db: val,
            title: "cart"
        })
    })
}