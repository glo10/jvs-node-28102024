import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
import { isValidArticle } from '../functions/validator.mjs'
import { generateNewId } from '../functions/generator-number.mjs'
const currentFileDir = dirname(fileURLToPath(import.meta.url))
const articlesFilename = resolve(currentFileDir, '..', 'data', 'le-monde.json')
let reader = createReadStream(articlesFilename)

export const getAll = (wholeFile = false) => {
  return new Promise((resolve, reject) => {
    let dataString = ''
    reader.on('data', (chunk) => {
      dataString += chunk
    })
    reader.on('end', () => {
      try {
        const data = JSON.parse(dataString)
        if(wholeFile) resolve(data)
        resolve(data.rss.channel.item)
      } catch(error) {
        reject(error)
      }
    })
  })
}

export const getOneById = async (id) => {
  return getAll()
  .then(articles => {
    if(/[0-9]+/.test(id))
      return articles.find(item => parseInt(id) === parseInt(item.id))
    throw new Error (`${id} not a numeric`)
  })
  .catch(error => error)
}

export const add = async (item) => {
  return Promise.all([generateNewId(), getAll(true)])
  .then(results => {
    const newId = results[0]
    const content = results[1]
    const items = content.rss.channel.item
    const errorMessage = 'title, description, link and enclosure are required'
    if (!isValidArticle(item)) {
      throw new Error(errorMessage)
    }
    item.id = newId
    const pubDate = new Date()
    item.pubDate = pubDate.toUTCString()
    items.push(item)
    content.rss.channel.item = items
    return writeJSONPromise(
      articlesFilename,
      content,
      { 
        message : `success, article with ID ${newId} has been added`,
        id: newId
      },
      {
        message: errorMessage
      }
    )
  })
  .catch(error => error)
}

export const deleteOneById = async (id) => {
  return getAll(true)
  .then(content => {
    if(/[0-9]+/.test(id)) {
      let items = content.rss.channel.item
      let itemToDelete = items.find(item => parseInt(item.id) === parseInt(id))
      if(!itemToDelete) {
        throw new Error('Article does not exist')
      }
      items = items.filter(item => parseInt(item.id) != parseInt(id))
      content.rss.channel.item = items
      return writeJSONPromise(
        articlesFilename,
        content,
        { message : `success, article with ID ${id} has been deleted` },
        { message : `Cannot delete article with ID ${id}` }
      )
    }
  })
  .catch(error => error)
}

export const updateOneById = async (id, newValues) => {
  return getAll(true)
  .then((content) => {
    const items = content.rss.channel.item
    const article = items.find((item) => parseInt(item.id) === parseInt(id))
    if(!article) {
      throw new Error('article does not exist')
    }
    Object.assign(article, newValues)
    content.rss.channel.item = items.map(item => {
      if(item.id === article.id) {
        item = article
      }
      return item
    })
    return writeJSONPromise(articlesFilename,
      content,
      { 
        message : `success, article with ID ${id} has been updated`,
        article
      },
      { message: 'Can\'t update article with ID ${id}'}
    )
  })
  .catch(error => error)
}

const writeJSONPromise = (filename, newContent, successMsg, errorMsg) => {
  return new Promise((resolve, reject) => {
    const ws = createWriteStream(filename)
    ws.write(JSON.stringify(newContent), (error) => {
      if (error) reject(new Error(errorMsg))
      resolve(successMsg)
    })
  })
}