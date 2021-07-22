var postModel = require('../models/postModel');
var menuModel = require('../models/menuModel');
const { post } = require('../../app');

exports.index = [function(req, res, next) {

        if ("editpost" in req.query) {
            next();
        } else {
            postModel.getPost().then(val => {
                console.log(this);
                res.render("index", {
                    title: "dashboard",
                    db: val
                });
            })
        }
    },
    function(req, res, next) {

        postModel.getPost().then(val => {
            res.locals.db = val;
            next();


        }, rej => {
            res.render("index", {
                title: "dashboard",
                db: false
            });
        })
    },
    function(req, res, next) {

        value = Number(req.query.editpost);


        postModel.getPost(value).then(val => {
            res.locals.editpost = val[0];
            console.log(res.locals);
            res.render("index");

        }, rej => {
            res.render("index", {
                title: "dashboard",
                db: false
            });
        })

    }
]