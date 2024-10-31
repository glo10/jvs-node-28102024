const { request } = require('https')
// TODO : refactoriser getAll() et getOne()
function getAll(req, res) {
  fetchGitHub()
    .then((users) => {
      console.log('users', users)
      res.render('users/home', { users })
  })
  .catch(() => {  res.status(404) })
}

function getOne(req, res) {
  const url = `/users/${req.params.id}`
  fetchGitHub(url)
    .then((user) => {
      res.render('users/details', { user })
  })
  .catch(() => {  res.status(404) })
}

function fetchGitHub(path = '/users', method='GET', hostname = 'jsonplaceholder.typicode.com' ) {
  return new Promise((resolve, reject) => {
    request(
      {
        hostname,
        path,
        method
      }, (resClient) => {
        let data = ''
        resClient.on('data', (chunk) => {
          data += chunk
        })
  
        resClient.on('end', () => {
          try {
            const result = JSON.parse(data)
            resolve(result)
          } catch{
            reject('JSON parse error')
          }
        })
      })
    .on('error', (error) => {
      reject(`error from http client : ${error.message}`)
    })
    .end()
  })

}

module.exports = {
  getAll,
  getOne
}