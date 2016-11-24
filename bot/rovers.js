'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function rovers() {
  return new vbTemplate.Text(`Photos from NASA's rovers on Mars, choose which ones pictures would you like to see`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<b>Curiosity</b>`, 'Curiosity', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/curiosity-rover.jpg'
      })
      .addKeyboardButton(`<b>Opportunity</b>`, 'Opportunity', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/opportunity-rover.jpeg'
      })
      .addKeyboardButton(`<b>Spirit</b>`, 'Spirit', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/spirit-rover.jpg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Back to start</b></font>`, 'Start', 6, 1, {
        TextSize: 'large',
        BgColor: '#000000'
      })
      .get()
}