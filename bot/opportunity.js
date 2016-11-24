'use strict'
const getRoverPhotos = require('./helpers/rover-photos')

module.exports = function opportunity(req) {
  return getRoverPhotos('opportunity', null, req.env.nasaApiKey)
}