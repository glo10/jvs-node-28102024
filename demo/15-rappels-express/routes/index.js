var express = require('express');
var router = express.Router();
var homePage = require('../controllers/index.js')
/* GET home page. */
router.get('/', homePage);
module.exports = router;
