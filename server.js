const handler = require('serve-handler')
const http = require('http')
const serveOptions = require('./lib/options')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => handler(req, res, serveOptions))

server.listen(PORT, () => {
  console.log(`Accepting connections @ :${PORT}`)
})