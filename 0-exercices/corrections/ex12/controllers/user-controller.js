const Mongo = require('../classes/mongo.js')
const UserModel = require('../models/schemas/user.js')

exports.add = function (req, res) {
  const errorMessage = 'Impossible to create new user for the moment'
  const connectPromise = (new Mongo()).connect()
  const saveUserPromise = (new UserModel({...req.body})).save()
  Promise.all([connectPromise, saveUserPromise])
    .then((results) => {
      const user = results[1]
      if(user) {
        res.status(201)
        res.json({ message: "success" })
        return
      }
      throw new Error('Impossible to create new user')
    })
    .catch(error => {
      console.error('error save user', error.message)
      res.status(404).send(errorMessage)
    })
}