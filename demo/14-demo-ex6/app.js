var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
const newsRouter = require('./routes/news');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.get('/sign-up', (req, res) => {
    res.sendFile(`${__dirname}/views/sign-up.html`)
})
// Toutes les routes avec la base /news 
//  peu importe la méthode sont gérées par le router newsRouter
app.use('/news', newsRouter)

module.exports = app;
