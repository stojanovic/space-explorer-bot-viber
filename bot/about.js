'use strict'

const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function about() {
  return [
    new vbTemplate.Text(`Space Explorer is simple Viber chat bot that uses NASA's API to get the data and images about the space`).get(),
    new vbTemplate.Text(`It's created for fun and also as a showcase for Claudia Bot Builder, a Node.js library for creating chat/voice bots for various platform and deploying them on AWS Lambda`)
      .addReplyKeyboard(true)
      .addKeyboardButton(`<b>Claudia Bot Builder</b>`, 'https://github.com/claudiajs/claudia-bot-builder', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<b>Source Code</b>`, 'https://github.com/stojanovic/space-explorer-bot-viber', 3, 2, {
        TextSize: 'large',
        BgColor: '#f6d95e',
        BgMediaType: 'picture',
        BgMedia: 'https://s3.eu-central-1.amazonaws.com/laptopfriendly/lf-buttons-all-locations-icons.png'
      })
      .addKeyboardButton(`<font color="#FFFFFF"><b>Back to start</b></font>`, 'Start', 6, 1, {
        TextSize: 'large',
        BgColor: '#000000'
      })
      .get()
  ]
}