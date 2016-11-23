'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function whatIsApod() {
  return [
    new vbTemplate.Text(`The Astronomy Picture of the Day is one of the most popular websites at NASA. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.`).get(),
    new vbTemplate.Text(`Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<b>Visit Website</b>`, 'http://apod.nasa.gov/apod/', 6, 1, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>Back</b>`, 'APOD', 6, 1, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .get()
  ]
}