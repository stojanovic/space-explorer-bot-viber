'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function whatIsApod() {
  return [
    new vbTemplate.Text(`The Astronomy Picture of the Day is one of the most popular websites at NASA. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.`).get(),
    new vbTemplate.Text(`Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<font color="#FFFFFF"><b>Visit Website</b></font>`, 'http://apod.nasa.gov/apod/', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/galaxy.jpeg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Back</b></font>`, 'APOD', 6, 2, {
        TextSize: 'large',
        BgColor: '#000000'
      })
      .get()
  ]
}
