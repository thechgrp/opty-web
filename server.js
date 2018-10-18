const handler = require('serve-handler')
const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => handler(req, res))

server.listen(PORT, () => {
  console.log(`Accepting connections @ :${PORT}`)
})