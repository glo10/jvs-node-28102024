import express from 'express'
import { all, fetchDoc } from '../controllers/index.mjs'
const router = express.Router()

router.get('/', all)
router.get('/doc', fetchDoc)
export default router