var express = require('express');
const { validId } = require('../controllers/middlewares/usersMiddleware')
const { getUsers, getUser, postUser } = require('../controllers/usersAPIController');
var router = express.Router();

// Middleware pour vérifier qu'un ID est numérique
router.use('/:id', validId)
router.get('/', getUsers); // ie /api/users en GET
router.get('/:id', getUser) // ie /api/users/:id
router.post('/', postUser) // ie /api/users en POST

module.exports = router;
