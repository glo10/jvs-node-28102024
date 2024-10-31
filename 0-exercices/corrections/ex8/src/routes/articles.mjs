import express from 'express'
import { createOne, deleteOne, findAll, findOne, updateOne } from '../controllers/article.mjs'
const router = express.Router()

router.use((req, res, next) => {
  res.set('Content-Type', 'application/json')
  next()
})

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', createOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)

export default router

