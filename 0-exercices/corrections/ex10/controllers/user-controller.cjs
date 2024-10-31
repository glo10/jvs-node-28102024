
const Encryption = require('../classes/encryption.cjs')
const Registration = require('../classes/registration.cjs')
const UserRepository = require('../repositories/user-repository.cjs')
const { resolve } = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../entities/user-entity.cjs')
const SECRET = require('../config/secret.cjs')

// TODO : factoriser signIn() et signUp()
function signIn (req, res) {
  const registration = makeRegistration(req.body)
  registration.login()
    .then(result => {
      if(result.token) res.status(200).json(result)
      else throw new Error(result)
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
}

function signUp(req, res) {
  const registration = makeRegistration(req.body)
  registration.subscribe()
    .then( ({ message }) => {
      if(message === 'success') res.status(201).json({ message })
      else throw new Error(message)
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
}

function makeRegistration(data) {
  if(!data) {
    throw new Error('email and password required')
  }
  const encryption = new Encryption(bcrypt, jwt, SECRET)
  const filename = resolve(__dirname, '..', 'data', 'users.json')
  const user = new User(data.email, data.password)
  const userRepository = new UserRepository(user, filename)
  return new Registration(userRepository, encryption)
}


module.exports = {
  signIn,
  signUp
}