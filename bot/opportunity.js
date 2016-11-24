'use strict'

module.exports = function opportunity(req) {
  const getRoverPhotos = require('./helpers/rover-photos')
  return getRoverPhotos('opportunity', null, req.env.nasaApiKey)
}