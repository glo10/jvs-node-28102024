const express = require('express')
const router = express.Router()
const { resolve } = require('path')

router.get('/', (req, res) => {
    const newsPath = resolve(__dirname, '..', 'views', 'news.html')
    res.sendFile(newsPath)
})

router.get('/noel', (req, res) => {
    const newsPath = resolve(__dirname, '..', 'views', 'noel.html')
    res.sendFile(newsPath)
})

module.exports = router