'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function apod() {
  return [
    new vbTemplate.Text(`Space Explorer is simple Messenger chat bot that uses NASA's API to get the data and images about the space`).get(),
    new vbTemplate.Text(`It's created for fun and also as a showcase for Claudia Bot Builder, a Node.js library for creating chat/voice bots for various platform and deploying them on AWS Lambda`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<b>What is APOD - Picture of the Day</b>`, 'WHAT_IS_APOD', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>Visit Website</b>`, 'http://apod.nasa.gov/apod/', 6, 1, {
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
  ]
}