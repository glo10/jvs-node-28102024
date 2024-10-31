
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import endpoints from './routes/articles.mjs'
import indexRouter from './routes/index.mjs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { checkID } from './middlewares/id.mjs'
import { defaultPage } from './controllers/index.mjs'
const src = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(join(src, 'public')))
// middleware qui va vérifier tous les paramètres nommée id
app.param('id', checkID)
app.use('/', indexRouter)
app.use('/api/articles', endpoints)
app.use(defaultPage)
export default app