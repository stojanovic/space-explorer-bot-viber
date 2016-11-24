'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function iss() {
  return rp.get('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => {
      const ISS = JSON.parse(response.body)
      return [
        new vbTemplate.Text(`International Space station is currently at `).get(),
        new vbTemplate.Location(ISS.latitude, ISS.longitude).get(),
        new vbTemplate.Text(`You can zoom out a bit to get a better ISS position overview`)
          .addReplyKeyboard(true)
          .addKeyboardButton(`<b>Website</b>`, 'http://iss.astroviewer.net', 6, 2, {
            TextSize: 'large',
            BgColor: '#f6d95e',
            BgMediaType: 'picture',
            BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
          })
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