const users = require('../models/usersModel')

function homeUser(req, res, next) {
    const title = 'Liste d\'utilisateurs'
    // users/list va charger le fichier views/users/list.ejs
    res.render('users/listView', { users, title })
  }

  function singleUser(req, res, next) {
    // Récupérer l'id à partir des paramètres de la requête
    // console.log('req', req.params, req.body)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id )
    const title = `Page détaillée ${user.name}`
    // users/single va charger le fichier views/users/single.ejs
    res.render('users/singleView', { user, title })
  }
module.exports = {
  homeUser,
  singleUser
}