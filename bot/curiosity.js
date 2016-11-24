'use strict'

module.exports = function curiosity(req) {
  return require('./helpers/rover-photos').getRoverPhotos('curiosity', null, req.env.nasaApiKey)
}