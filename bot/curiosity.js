'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function peopleInSpace() {
  return rp.get('http://api.open-notify.org/astros.json')
    .then(response => {
      const inSpace = JSON.parse(response.body)
      return [
        new vbTemplate.Text(`There are ${inSpace.number} people in Space right now.`).get(),
        new vbTemplate.Text(inSpace.people.reduce((response, person) => {
          return response + `- ${person.name}` + ((person.craft) ? ` is on ${person.craft}` : '') + ';\n'
        }))
          .addReplyKeyboard(true)
          .addKeyboardButton(`<font color="#FFFFFF"><b>Back</b></font>`, 'Mars Rovers', 6, 1, {
            TextSize: 'large',
            BgColor: '#000000'
          })
          .get()
      ]
    })
}