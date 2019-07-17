const express = require('express')
const cors = require('cors')

const config = require('./config')
const routes = require('./routes')
const { handleError } = require('./middlewares')

const app = express()

app.use(cors())
app.use('/', routes(express.Router))
app.use(handleError())

const server = app.listen(config.port, () => {
  const { address, port } = server.address()
  console.log(`REST API listening at http://${address}:${port}`)
})
