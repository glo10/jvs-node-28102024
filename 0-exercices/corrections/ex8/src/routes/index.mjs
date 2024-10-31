import express from 'express'
import { fetchDoc } from '../controllers/index.mjs'
const router = express.Router()

router.get('/doc', fetchDoc)
export default router