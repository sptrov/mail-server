let emailDbOperations = require('../services/scheduleDbOperations')

module.exports = {
	post: (req, res) => {
		let data = req.body;
		// delete data.schedule
		emailDbOperations.SaveEmailWithSchedule(data)
		// Schedule
		// .create(data.schedule)
		// .catch(err => console.log(err))
		// .then((schedule) =>{
		// 	delete data.schedule;
		// 	let email = new Email(data);
		// 	email.schedule = schedule._id;
		// 	email.save()
		// 	console.log(schedule)
		// })


		// Email
		// .create(data)
		// .catch(err => {
		// 	console.log(err)
		// })
		// .then(user => {
		// 	console.log(user)
		// })

		//console.log(data)
		res.json({"message":"sucess"})
	}
}