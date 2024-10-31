const users = require('../models/usersModel')

function getUsers(req, res) {
  res.status(200).json(users);
}

function getUser(req, res) {
  res.status(200).send('TODO')
}

function postUser(req, res) {
  // avec req.body on, récupère les données envoyées dans le body de la requête
  res.status(200).send('TODO')
}

function updateUser(req, res) {
  res.status(200).send('TODO')
}

function deleteUser(req, res) {
  res.status(200).send('TODO')
}

module.exports = {
  getUser,
  getUsers,
  postUser,
  updateUser,
  deleteUser
}