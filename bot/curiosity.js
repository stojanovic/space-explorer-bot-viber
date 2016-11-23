'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function rovers() {
  return new vbTemplate.Text(`Photos from NASA's rovers on Mars, choose which ones pictures would you like to see`)
    .addReplyKeyboard(true)
    .addKeyboardButton(`<b>Curiosity</b>`, 'Curiosity', 6, 2, {
      TextSize: 'large',
      BgColor: '#f6d95e',
      BgMediaType: 'picture',
      BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
    })
    .addKeyboardButton(`<b>Opportunity</b>`, 'Opportunity', 6, 2, {
      TextSize: 'large',
      BgColor: '#f6d95e',
      BgMediaType: 'picture',
      BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
    })
    .addKeyboardButton(`<b>Spirit</b>`, 'Spirit', 6, 2, {
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
}