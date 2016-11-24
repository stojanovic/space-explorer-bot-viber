'use strict'

const getRoverPhotos = require('./helpers/rover-photos').getRoverPhotos

module.exports = function opportunity(req) {
  return getRoverPhotos('opportunity', null, req.env.nasaApiKey)
}