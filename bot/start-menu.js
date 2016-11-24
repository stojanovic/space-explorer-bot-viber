'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function startMenu(text) {
  console.log('inside start')
  return new vbTemplate.Text(text || `Hello this is Space Explorer, what would you like me to do:`)
    .addReplyKeyboard(true)
      .addKeyboardButton(`<b>Astronomy Picture of the Day</b>`, 'APOD', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>Photos from Rovers on Mars</b>`, 'Mars Rovers', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>Where is the ISS now?</b>`, 'ISS', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>How many people are in space right now?</b>`, 'People in Space', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>What about me, your space bot?</b>`, 'About', 6, 1, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
    .get()
}