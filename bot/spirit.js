'use strict'

const getRoverPhotos = require('./helpers/rover-photos').getRoverPhotos

module.exports = function spirit(req) {
  return getRoverPhotos('spirit', null, req.env.nasaApiKey)
}