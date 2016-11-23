'use strict'

const startMenu = require('./start-menu')
const apod = require('./apod')
const rovers = require('./rovers')
const iss = require('./iss')
const peopleInSpace = require('./people-in-space')
const about = require('./about')

module.exports = function spaceFlow(message, request){

  if (request.text == 'START_MENU') return startMenu()
  if (request.text == 'APOD') return apod()
  if (request.text == 'ROVERS') return rovers()
  if (request.text == 'ISS') return iss()
  if (request.text == 'PEOPLE_IN_SPACE') return peopleInSpace()
  if (request.text == 'ABOUT') return about()

}