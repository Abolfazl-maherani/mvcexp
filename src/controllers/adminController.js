var postModel = require('../models/postModel');
var menuModel = require('../models/menuModel');
const { post } = require('../../app');
var exp = require("express");
const { json } = require('express');

exports.index = [function(req, res, next) {

        if ("editpost" in req.query) {
            next();
        } else {
            postModel.getPost().then(val => {
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
                db: ""
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
];
exports.addpost = function(req, res) {

    if (req.method == "POST") {

        let title, cpation;
        title = ("title" in req.body && req.body.title.length > 1) ? req.body.title : null;
        caption = ("caption" in req.body && req.body.caption.length > 1) ? req.body.caption : null;
        postModel.addPost(title, caption).then(val => {
            console.log(val);
            res.redirect('/admin?addpost=true');



        }, rej => {
            console.log(rej)
        });
    } else {
        res.redirect('/admin?addpost=false');
    }



}