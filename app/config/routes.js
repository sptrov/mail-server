let controllers = require('../controllers/index')

module.exports = (app) => {

	app.post('/api/emailDefinition', controllers.email.post)

	app.all('*', (req, res) => {
		res.status(404)
		res.json({
			message: 'Not Found!'
		})
		res.end()
	})
}