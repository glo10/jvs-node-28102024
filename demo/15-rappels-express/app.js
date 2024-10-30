// import des dépendances pour augmenter la sécurité du serveur Express 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import des routes (Dans le cadre Express, les routes sont dans le dossier routes)
var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');
const usersApiRouter = require('./routes/usersApiRouter')

// Création de la nouvelle instance d'Express
var app = express();

// Partie dédiée à la vue avec le type de moteur de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware (intermédiaires qui intercepte les requêtes pour faire des vérifications ou apporter des nouvelles fonctionnalités)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation des routes de notre application
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/users', usersApiRouter)

/**
 * Middleware qui gère les erreurs côté client
 * un autre middleware qui intercepte les routes qui ne matchent pas avec les routes que vous avez définies
 * Autrement ici on génère une page 404
 */
app.use(function(req, res, next) {
  next(createError(404));
});

// middleware qui gère les erreurs côté serveur donc de type 50X
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
