const users = require('../models/usersModel')

function getUsers(req, res) {
  res.status(200).json(users);
}
function getUser(req, res) {
  res.status(200).send('OK')
}
function postUser(req, res) {
  console.log("body", req.body);
}

module.exports = {
    getUser,
    getUsers,
    postUser
  }