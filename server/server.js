const path = require('path')
const express = require('express')

const people = require('./routes/people')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/people', people)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
