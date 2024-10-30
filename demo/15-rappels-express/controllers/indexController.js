function homePage(req, res, next) {
    res.render('index', { title: 'Express' });
  }
module.exports = homePage