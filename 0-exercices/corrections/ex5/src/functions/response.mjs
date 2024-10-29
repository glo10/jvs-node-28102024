import { createReadStream, access, constants } from 'node:fs'
export const render = (filename, page404, res, options = {}) => {
  access(filename, constants.F_OK, (error) => {
    if(error) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      createReadStream(page404).pipe(res)
    } else {
      res.writeHead(200, options)
      createReadStream(filename).pipe(res)
    }
  })
}