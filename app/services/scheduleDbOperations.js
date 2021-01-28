let Email = require('../models/email').Email

function saveEmailWithSchedule(emailDefinition) {
 return Email.create(emailDefinition).then(()=>{
   
 })

}
module.exports = {
  SaveEmailWithSchedule: saveEmailWithSchedule
}