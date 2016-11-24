'use strict'

module.exports = function spirit(req) {
  return require('./helpers/rover-photos').getRoverPhotos('spirit', null, req.env.nasaApiKey)
}