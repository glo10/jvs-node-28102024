const UserRepository = require('../../repositories/user.js')
const UserModel = require('../../models/schemas/user.js')
const UserImport = require('../../classes/user-import.js')
const Mongo = require('../../classes/mongo.js')
const { resolve } = require('path')
const { readFile } = require('node:fs/promises')
const jsonFile = resolve(__dirname, '..', '..', 'models', 'data', 'users.json')
const reader = readFile(jsonFile, { encoding: 'utf8' })
const userRepo = new UserRepository(reader, UserModel, new Mongo())


const importUser = new UserImport(userRepo)
importUser.all()
