'use strict'

module.exports = function opportunity(req) {
  return require('./helpers/rover-photos').getRoverPhotos('opportunity', null, req.env.nasaApiKey)
}