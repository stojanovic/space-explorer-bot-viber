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
          .addKeyboardButton(`<font color="#FFFFFF"><b>Website</b></font>`, 'http://iss.astroviewer.net', 6, 2, {
            TextSize: 'large',
            BgColor: '#f6d95e',
            BgMediaType: 'picture',
            BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/galaxy.jpeg'
          })
          .addKeyboardButton(`<font color="#FFFFFF"><b>Back to start</b></font>`, 'Start', 6, 2, {
            TextSize: 'large',
            BgColor: '#000000'
          })
          .get()
      ]
    })
}
