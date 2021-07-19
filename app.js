var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var boot = require("./src/bootstrap");
let configApp = require("./src/config/configapp.js");
let menu = require('./src/models/menuModel.js');
var app = express();
app.locals = configApp;
// view engine setup
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout", "layouts/layout")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// init router
let router = express.Router();
app.use(router);
boot(app, router);

menu.getmenuitem().then((value) => {
    app.locals.menu = value;

});

//static Page 

// home
router.get("/", (req, res, next) => {
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