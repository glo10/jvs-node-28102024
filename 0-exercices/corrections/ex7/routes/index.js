const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.render('index', { title: 'Accueil' });
})

router.get('/favicon.ico', (req, res) => {
  res.send('favicon')
})

module.exports = router
