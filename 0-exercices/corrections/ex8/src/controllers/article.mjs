import { getAll, getOneById, add, deleteOneById, updateOneById } from '../repositories/article.mjs'

export const findAll = (req, res) => {
  getAll()
  .then((articles) => {
    let status = articles.rss ? 200 : 404
    res.status(status).json(articles)
  }).catch((error) => res.status(404).json(error.message))
}

export const findOne = (req, res) => {
  getOneById(req.params.id)
  .then(article => {
    if (!article) {
      throw new Error({ message : `no data with ID ${req.params.id}`})
    }
    res.json(article)
  }).catch((error) => res.status(404).json(error.message))
}

export const createOne = (req, res) => {
  add(req.body)
  .then((response) => {
    if(response.id && /success/i.test(response.message)) {
      res.status(201)
    } else {
      throw new Error(`create new article failed, check your data and API documentation`)
    }
    res.json(response.message)
  }).catch((error) => {
    res.status(404).json(error.message)
  })
}

export const updateOne = (req, res) => {
  updateOneById(parseInt(req.params.id), req.body)
  .then(article => {
    if (!article) res.status(404).send('article not found')
    res.status(200).json(article)
  }).catch(() => res.status(404).json('please contact us contact@app.com'))
}

export const deleteOne = (req, res) => {
  const id = req.params.id
  deleteOneById(id)
  .then((article) => {
    if(/success/i.test(article.message)) {
      res.status(200).json({ message : `article with ID ${id} has been deleted` })
    } else {
      throw new Error(article.message)
    }
  }).catch((error) => res.status(404).json(error.message))
}
