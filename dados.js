const http = require('http')

// const port = 8000
const host = 'localhost/dados'

const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end()
})