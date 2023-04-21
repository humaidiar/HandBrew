import express from 'express'
import path from 'path'

import fileUpload from 'express-fileupload'
import coffee from './routes/coffee'
import uploader from './routes/uploader'

const server = express()

server.use(fileUpload())
server.use(express.json({ limit: '50mb' }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/coffee', coffee)
server.use('/api/v1/uploader', uploader)
server.use('/api/*', (req, res) => res.sendStatus(404))

server.get('*', (request, response) => {
  response.sendFile(__dirname, '/public/index.html')
})

export default server
