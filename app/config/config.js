const path = require('path')
let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
	dev: {
		rootPath: rootPath,
		db: 'mongodb://localhost:27017/email_definitions',
		port: process.env.PORT || 5544
	},
	dev_cloud: {
		rootPath: rootPath,
		port: process.env.PORT,
		db: 'mongodb+srv://stoyan:qweqwe@cluster0.lh40a.mongodb.net/email_definitions?retryWrites=true&w=majority'
	},
	staging: {
		rootPath: rootPath,
		db: process.env.MONGO_DB_CONN_STRING_STAG,
		port: process.env.PORT
	},
	production: {
		rootPath: rootPath,
		db: process.env.MONGO_DB_CONN_STRING,
		port: process.env.PORT
	},
	test: {
		rootPath: rootPath,
		db: 'mongodb://localhost:27017/email_definitions',
		port: process.env.PORT || 5533

	},
}