'use strict'



module.exports = function curiosity(req) {
  const getRoverPhotos = require('./helpers/rover-photos')
  return getRoverPhotos('curiosity', null, req.env.nasaApiKey)
}