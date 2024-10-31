const { resolve } = require('path')
const sqlite3 = require('sqlite3')

const dbFilename = resolve(__dirname, '..', 'database', 'app.sqlite')
const db = new sqlite3.Database(dbFilename, (error) => {
    if(!error) console.log('DB OK')
    else console.error('DB KO')
})
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS product
    (
      ID INTEGER PRIMARY KEY,
      name VARCHAR(70),
      reference VARCHAR(28),
      description VARCHAR(255),
      url VARCHAR(50),
      price INT(10),
      CONSTRAINT uk_name UNIQUE(name),
      CONSTRAINT uk_reference UNIQUE(reference)
    )
`
db.run(createTableSQL, (error) => {
    if(!error) console.log('table product created')
    else console.error('Failed to create product table', error.message)
})

const addProductSQL = `
INSERT INTO product(
    name,
    reference,
    description,
    url,
    price
    )
VALUES (?,?,?,?,?)`
db.run(addProductSQL, ['product2', 'reference2', 'desc2', 'http://app/ref2', 50], (error) => {
  if(!error) console.log('Ajout OK')
  else console.error('Ajout failed', error.message)
})

const productsSql = `SELECT * FROM product`
db.all(productsSql, (error, rows) => {
  if(!error) console.log('rows', rows)
  else console.error('get all products failed')
})