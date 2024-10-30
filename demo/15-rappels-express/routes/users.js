var express = require('express');
const homeUser = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', homeUser);

module.exports = router;
