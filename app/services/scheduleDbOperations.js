let Email = require('../models/email').Email

function saveEmailWithSchedule(emailDefinition) {
  // Schedule
  // .create(emailDefinition.schedule)
  // .catch(err => console.log(err))
  // .then((schedule) =>{
  //   delete emailDefinition.schedule;
  //   let email = new Email(emailDefinition);
  //   email.schedule = schedule._id;
  //   email.save()
  //   console.log(schedule)
  // })

 return Email.create(emailDefinition)
    // .catch(err => console.log(err))
    // .then(res => console.log(res))
}
module.exports = {
  SaveEmailWithSchedule: saveEmailWithSchedule
}