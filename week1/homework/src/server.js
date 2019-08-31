'use strict'

const http = require('http')

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer () {
  let state = 10

  const server = http.createServer((req, res) => {
    if (req.url == '/state') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({ state: state }))
    } else if (req.url == '/add') {
      state += 1
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({ state: state }))
    } else if (req.url == '/subtract') {
      state -= 1
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({ state: state }))
    } else if (req.url == '/reset') {
      state = 10
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({ state: state }))
    } else {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({ error: 'Not found' }))
    }
    res.end()
  })

  return server
}

module.exports = { createServer }
