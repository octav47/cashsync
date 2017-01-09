var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = {
    index: require('./routes/index'),
    users: require('./routes/users'),
    login: require('./routes/login')
};

var app = express();
var auth = require('express-authentication');
var basic = require('express-authentication-basic');
var login = basic(function (challenge, callback) {
    if (challenge.username === 'kir' && challenge.password === 'Qwert1') {
        callback(null, true, {user: 'kir'});
    } else {
        callback(null, false, {error: 'INVALID_PASSWORD'});
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(login);

app.use('/', routes.index);
app.use('/users', routes.users);
app.use('/login', routes.login);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;