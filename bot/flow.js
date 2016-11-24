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

  if (message.text == 'Start') return startMenu()
  if (message.text == 'APOD') return apod(request)
  if (message.text == 'What is a Picture of the Day') return whatIsApod()
  if (message.text == 'Mars Rovers') return rovers()
  if (message.text == 'ISS') return iss(request)
  if (message.text == 'People in Space') return peopleInSpace()
  if (message.text == 'About') return about()
  if (message.text == 'Curiosity') return curiosity()
  if (message.text == 'Opportunity') return opportunity()
  if (message.text == 'Spirit') return spirit()
  
  return startMenu()
}