'use strict'

const roverPhotos = require('./helpers/rover-photos')

module.exports = function curiosity(req) {
  return roverPhotos.getRoverPhotos('curiosity', null, req.env.nasaApiKey)
}