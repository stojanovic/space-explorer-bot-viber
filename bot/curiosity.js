'use strict'

const getRoverPhotos = require('./helpers/rover-photos').getRoverPhotos

module.exports = function curiosity(req) {
  return getRoverPhotos('curiosity', null, req.env.nasaApiKey)
}