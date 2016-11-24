'use strict'

module.exports = function spirit(req) {
  const getRoverPhotos = require('./helpers/rover-photos')
  return getRoverPhotos('spirit', null, req.env.nasaApiKey)
}