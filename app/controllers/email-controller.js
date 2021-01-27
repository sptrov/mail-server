let emailDbOperations = require('../services/scheduleDbOperations')

module.exports = {
	post: (req, res) => {
		let data = req.body;
		
		emailDbOperations.SaveEmailWithSchedule(data)
			.catch(err => console.log(err))

		res.json({
			"message": "sucess"
		})
	}
}