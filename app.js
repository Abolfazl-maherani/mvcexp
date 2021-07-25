var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var boot = require("./src/bootstrap");
let configApp = require("./src/config/configapp.js");
let menu = require('./src/models/menuModel.js');
let post = require('./src/models/postModel.js');
var db = require('./src/config/connectdb');

post.lengthpost().then(val => {
    if (val[0].count == 0)
        post.addPost("express", "express description").then(val => {}, rej => {
            console.log(rej);

        })
})

menu.lengthmenu().then(val => {
    if (val[0].count == 0) {

        menu.addmenu("صفحه اصلی", "/").then(val => {}, rej => {
            console.log(rej);
        });
        menu.addmenu("بلاگ", "/blog").then(val => {}, rej => {
            console.log(rej);
        });
        menu.addmenu("داشبورد", "/admin").then(val => {}, rej => {
            console.log(rej);
        });
        menu.getmenuitem().then((value) => {
            app.locals.menu = value;

        });

    }

})






var app = express();
var admin = express();

app.locals = configApp;
admin.locals = configApp;



// app config
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
admin.set('views', path.join(__dirname, './src/admin/views'));
admin.set('view engine', 'ejs');
app.use(expressLayouts);
admin.use(expressLayouts);
app.set("layout", "layouts/layout")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
admin.use("/admin", express.static(path.join(__dirname, "src", "admin", 'public')));
app.use("/", admin);




// init router
let routerapp = express.Router();
let routerAdmin = express.Router();
app.use(routerapp);
admin.use(routerAdmin);

boot.adminboot(admin, routerAdmin);
boot.appboot(app, routerapp);

menu.getmenuitem().then((value) => {
    app.locals.menu = value;

});




// home
routerapp.get("/", (req, res, next) => {
    res.render("index", {
        layout: "layouts/home"
    });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;