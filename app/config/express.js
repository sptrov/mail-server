const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = (config, app) => {
	app.use(cookieParser())
	app.use(cors()) 
	app.use(bodyParser.json())
	app.use(express.static(config.rootPath + 'public'))
}