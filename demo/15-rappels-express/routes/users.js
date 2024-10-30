var express = require('express');
const { homeUser, singleUser } = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', homeUser);
// les routes qui correspondent /users/1 /users/2 etc.
router.get('/:id', singleUser)

module.exports = router;
