const express = require('express');
const { checkId } = require('../controllers/middlewares/usersMiddleware')
const { getUsers, getUser, postUser, updateUser, deleteUser } = require('../controllers/usersAPIController');
const router = express.Router();

/**
 * Middleware pour vérifier qu'un ID est numérique
 * Une autre façon de faire la même chose est
 *  router.param('id', checkId)
 */ 
router.use('/:id', checkId)
router.get('/', getUsers); // ie /api/users en GET
router.get('/:id', getUser) // ie /api/users/:id
router.post('/', postUser) // ie /api/users en POST
router.put('/', updateUser)
router.delete('/', deleteUser)

module.exports = router;
