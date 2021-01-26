const express = require('express')
const environment = process.env.NODE_ENV || "dev"

let app = express()

const config = require('./app/config/config')[environment]

require('./app/config/database')(config)
require('./app/config/express')(config,app)

require('./app/config/routes')(app)

console.log(`listening on port ${config.port} on ${environment} environment `)

module.exports = app.listen(config.port)


