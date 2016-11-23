'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function iss(request) {
  return rp.get(`https://api.nasa.gov/planetary/apod?api_key=${request.env.nasaApiKey}`)
    .then(response => {
      const ISS = JSON.parse(response.body)

      return [
        new vbTemplate.Location(ISS.latitude, ISS.longitude),
        new vbTemplate.Text(`International Space station`)
          .addReplyKeyboard(true)
          .addKeyboardButton(`<b>Website</b>`, 'http://iss.astroviewer.net', 6, 2, {
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
      ]
    })
  
}