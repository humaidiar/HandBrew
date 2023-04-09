import express from 'express'
import path from 'path'
import coffee from './routes/coffee'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/coffee', coffee)
server.use('/api/*', (req, res) => res.sendStatus(404))

server.get('*', (request, response) => {
  response.sendFile(__dirname, '/public/index.html')
})

export default server
