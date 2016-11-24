'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function rovers() {
  return new vbTemplate.Text(`Photos from NASA's rovers on Mars, choose which ones pictures would you like to see`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<font color="#FFFFFF"><b>Curiosity</b></font>`, 'Curiosity', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/curiosity-rover.jpg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Opportunity</b></font>`, 'Opportunity', 6, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/opportunity-rover.jpeg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Spirit</b></font>`, 'Spirit', 6, 2, {
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