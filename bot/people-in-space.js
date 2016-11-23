'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function apod() {
  return [
    new vbTemplate.Text(`There are 6 people in Space right now.`).get(),
    new vbTemplate.Text(`- Me your bot`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<b>Back to start</b>`, 'START_MENU', 6, 1, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .get()
  ]
}