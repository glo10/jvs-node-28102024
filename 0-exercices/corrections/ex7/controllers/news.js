const { readFile } = require('fs/promises')
const { join } = require('path')
const jsonFile = join(__dirname, '../public', 'data', 'news.json')

const checkID = (req, res, next) => {
  const id = req.params.id
  // test si id est numérique
  if (req.params.id && !/\d+/.test(req.params.id)) {
    res.status(404)
    res.render('error', {
      message: `${id} doit être numérique`
    })
  }
  next()
}

const findAll = (req, res) => {
  getContent(jsonFile)
  .then(({ articles, title }) => {
    res.render('news/list',{ articles, title })
  }).catch(error => res.render('error', { message : error.message}))
}

const findOne = (req, res) => {
  const id = req.params.id
  getContent(jsonFile)
  .then(({ articles }) => {
    const article = articles.find(item => item.id == id)
      if(article) res.render('news/single', article)
      else res.render('error', { message: `Aucun article avec l'ID ${id}`})
  }).catch(error => res.render('error', { message : error.message}))
}

const getContent = (filename, charset='utf-8') => {
  return readFile(filename, charset)
  .then((data) => {
    const news = JSON.parse(data)
    // Depuis news.rss.channel on décompose pour récupérer item et title
    const { item, title } = news.rss.channel
    return { articles: item, title }
  })
  .catch(error => error)
}

module.exports = {
  checkID,
  findOne,
  findAll
}