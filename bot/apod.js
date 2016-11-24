'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function apod(req) {
  console.log('APOD')
  return rp.get(`https://api.nasa.gov/planetary/apod?api_key=${req.env.nasaApiKey}`)
    .then(response => {
      const APOD = JSON.parse(response.body)
      console.log(APOD)
      return [
        new vbTemplate.Text(`NASA's Astronomy Picture of the Day for ${APOD.date}`).get(),
        new vbTemplate.Text(APOD.copyright ? `, © ${APOD.copyright}` : 'NASA copyright').get(),
          APOD.media_type === 'image' ? new vbTemplate.Photo(APOD.url, APOD.title).get() : new vbTemplate.Url(APOD.url).get(),
        new vbTemplate.Text(APOD.explanation)
          .addReplyKeyboard(true)
          .addKeyboardButton(`<font color="#FFFFFF"><b>What is APOD - Picture of the Day</b></font>`, 'What is a Picture of the Day', 6, 2, {
            TextSize: 'large',
            BgColor: '#f6d95e',
            BgMediaType: 'picture',
            BgMedia: 'https://raw.githubusercontent.com/stojanovic/space-explorer-bot-viber/master/images/galaxy.jpeg'
          })
          .addKeyboardButton(`<font color="#FFFFFF"><b>Visit Website</b></font>`, 'http://apod.nasa.gov/apod/', 6, 1, {
            TextSize: 'large',
            BgColor: '#000000'
          })
          .addKeyboardButton(`<font color="#FFFFFF"><b>Back to start</b></font>`, 'Start', 6, 1, {
            TextSize: 'large',
            BgColor: '#000000'
          })
          .get()
      ]
    })

}
