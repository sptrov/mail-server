let Email = require('../models/email').Email

function saveEmailWithSchedule(emailDefinition) {
  return Email.create(emailDefinition)

}
module.exports = {
  SaveEmailWithSchedule: saveEmailWithSchedule
}