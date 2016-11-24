'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function peopleInSpace() {
  return rp.get('http://api.open-notify.org/astros.json')
    .then(response => {
      const inSpace = JSON.parse(response.body)
      console.log(inSpace)
      return [
        new vbTemplate.Text(`There are ${inSpace.number} people in Space right now.`).get(),
        new vbTemplate.Text(inSpace.people.reduce((response, person) => {
          return response + `- ${person.name}` + ((person.craft) ? ` is on ${person.craft}` : '') + ';\n'
        }))
          .addReplyKeyboard(true)
          .addKeyboardButton(`<b>Back to start</b>`, 'Start', 6, 1, {
            TextSize: 'large',
            BgColor: '#f6d95e',
            BgMediaType: 'picture',
            BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
          })
          .get()
      ]
    })
}