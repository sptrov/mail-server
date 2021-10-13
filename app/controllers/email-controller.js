let emailDbOperations = require('../services/scheduleDbOperations')

module.exports = {
	post: (req, res) => {
		let data = req.body;

		emailDbOperations.SaveEmailWithSchedule(data)
			.then(() => {
				res.json({
					"message": "sucess"
				})
			})
			.catch(err => console.log(err))
	}
}