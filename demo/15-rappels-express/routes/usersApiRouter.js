var express = require('express');
const { getUsers, getUser, postUser } = require('../controllers/usersController');
var router = express.Router();

router.get('/', getUsers); // ie /api/users en GET
router.get('/:id', ) // ie /api/users/:id
router.post('/', ) // ie /api/users en POST

module.exports = router;
