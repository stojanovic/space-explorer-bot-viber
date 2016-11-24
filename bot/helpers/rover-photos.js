'use strict'

const rp = require('minimal-request-promise')
const vbTemplate = require('claudia-bot-builder').viberTemplate

module.exports = function getRoverPhotos(rover, sol, nasaApiKey){
  console.log(rover, sol, nasaApiKey)
  if (!sol) {
    let randomNum = Math.random() * 9
    sol = (parseInt(randomNum, 0) + 1) * 100
  }
  return rp.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${nasaApiKey}`)
    .then(response => {
      let rawBody = response.body
      let roverInfo = JSON.parse(rawBody)
      console.log(roverInfo.photos)
      let photos = roverInfo.photos.slice(0, 4)
      let roverImages = [
        new vbTemplate.Text(` rover`).get()
        /*new vbTemplate.Text(`${roverInfo.photos[0].rover.name} rover`).get(),
        new vbTemplate.Text(`Landing Date: ${roverInfo.photos[0].rover.landing_date} \nTotal photos: ${roverInfo.photos[0].rover.total_photos}`).get()*/
      ]
      return roverImages
    }).catch(err => {
      console.log(err)
      return getRoverPhotos(rover, 1000, nasaApiKey)
    })
}

/*module.exports = function getRoverPhotos (rover, sol, nasaApiKey) {
  console.log(rover, sol, nasaApiKey)
  if (!sol) {
    let randomNum = Math.random() * 9
    sol = (parseInt(randomNum, 0) + 1) * 100
  }
  console.log('before request')
  return rp.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${nasaApiKey}`)
    .then(response => {
      let rawBody = response.body
      console.log(rawBody)
      let roverInfo = JSON.parse(rawBody)
      let photos = roverInfo.photos.slice(0, 4)
      let roverImages = [
        new vbTemplate.Text(`${roverInfo.photos[0].rover.name} rover`).get(),
        new vbTemplate.Text(`Landing Date: ${roverInfo.photos[0].rover.landing_date} \nTotal photos: ${roverInfo.photos[0].rover.total_photos}`).get()
      ]

      photos.map(photo => {
        console.log(photo.img_src)
        return roverImages.push(
          new vbTemplate.Photo(photo.img_src, `${photo.rover.name} At ${photo.earth_date} (sol ${photo.sol} ), using ${photo.camera.full_name}`).get(),
        )
      })

      photos[photos.length-1]
        .addReplyKeyboard(true)
        .addKeyboardButton(`<font color="#FFFFFF"><b>Visit Wikipedia</b></font>`, `https://en.wikipedia.org/wiki/${rover}_(rover)`, 6, 1, {
          TextSize: 'large',
          BgColor: '#000000'
        })
        .addKeyboardButton(`<font color="#FFFFFF"><b>Back to start</b></font>`, 'Start', 6, 1, {
          TextSize: 'large',
          BgColor: '#000000'
        })
        .get()

      return photos 
          //.addButton('Show newest photos', `PHOTOS_${rover}_${roverInfo.photos[0].rover.max_sol}`)
    })
    .catch(err => {
      console.log(err)
      return getRoverPhotos(rover, 1000, nasaApiKey)
    })
}*/

