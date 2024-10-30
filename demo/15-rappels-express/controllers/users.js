function homeUser(req, res, next) {
    const users = [
        { name: 'Glodie' },
        { name: 'Marie' },
    ]
    const title = 'Liste d\'utilisateurs'
    // users/list va charger le fichier views/users/list.ejs
    res.render('users/list', { users, title })
  }
module.exports = homeUser