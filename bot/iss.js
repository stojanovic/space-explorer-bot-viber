'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function iss() {
  return new vbTemplate.Text(`International Space station`)
    .addReplyKeyboard(true)
    .addKeyboardButton(`<b>Website</b>`, 'ISS_WEBSITE', 6, 2, {
      TextSize: 'large',
      BgColor: '#f6d95e',
      BgMediaType: 'picture',
      BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
    })
    .addKeyboardButton(`<b>Back to start</b>`, 'START_MENU', 6, 1, {
      TextSize: 'large',
      BgColor: '#f6d95e',
      BgMediaType: 'picture',
      BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
    })
    .get()
}