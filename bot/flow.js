'use strict'

const isUrl = require('./helpers/is-url')
const startMenu = require('./start-menu')
const apod = require('./apod')
const whatIsApod = require('./what-is-apod')
const rovers = require('./rovers')
const iss = require('./iss')
const peopleInSpace = require('./people-in-space')
const about = require('./about')
const curiosity = require('./curiosity')
const opportunity = require('./opportunity')
const spirit = require('./spirit')

module.exports = function spaceFlow (message, request) {

  if (isUrl(message.text)) // Do nothing if user sends an url, because it's a reply to an URL button
    return true

  if (request.text == 'Start') return startMenu()
  if (request.text == 'APOD') return apod(request)
  if (request.text == 'What is a Picture of the Day') return whatIsApod()
  if (request.text == 'Mars Rovers') return rovers()
  if (request.text == 'ISS') return iss(request)
  if (request.text == 'People in Space') return peopleInSpace()
  if (request.text == 'About') return about()
  if (request.text == 'Curiosity') return curiosity()
  if (request.text == 'Opportunity') return opportunity()
  if (request.text == 'Spirit') return spirit()
  
  return startMenu()
}