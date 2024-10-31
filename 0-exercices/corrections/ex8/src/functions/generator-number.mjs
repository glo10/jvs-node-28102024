export const generateNewId = async (cb) => {
  return cb()
  .then(articles => {
    let newId = 1
    do{
      newId = Math.floor(Math.random()*1000)
    } while(articles.find(article => article.id === newId))
    return newId
  })
}