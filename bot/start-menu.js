'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function startMenu(text) {
  return new vbTemplate.Text(text || `Hello this is Space Explorer, what would you like me to do:`)
    .addReplyKeyboard(true)
      .addKeyboardButton(`<font color="#FFFFFF"><b>Astronomy Picture of the Day</b></font>`, 'APOD', 3, 2, {
        TextSize: 'large',
        BgColor: '#000000',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/galaxy.jpeg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Photos from Rovers on Mars</b></font>`, 'Mars Rovers', 3, 2, {
        TextSize: 'large',
        BgColor: '#000000',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/curiosity.jpg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Where is the ISS now?</b></font>`, 'ISS', 3, 2, {
        TextSize: 'large',
        BgColor: '#000000',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/iss.jpg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>How many people are in space right now?</b></font>`, 'People in Space', 3, 2, {
        TextSize: 'large',
        BgColor: '#000000',
        BgMediaType: 'picture',
        BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/space-people.jpg'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>What about me, your space bot?</b></font>`, 'About', 6, 1, {
        TextSize: 'large',
        BgColor: '#000000',
        BgMediaType: 'picture'
        //BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/claudia-chatbot.png'
      })
    .get()
}