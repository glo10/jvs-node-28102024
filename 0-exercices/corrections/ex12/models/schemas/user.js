const { Schema, model } = require('mongoose')

const userSchema = Schema({
  email : { type: String, required: true, unique: true},
  password: { type: String },
  name: String,
  age: Number
})

module.exports = model('User', userSchema)