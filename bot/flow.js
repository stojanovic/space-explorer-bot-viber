'use strict'

const startMenu = require('./start-menu')

module.exports = function spaceFlow(message, request){

  if (request.text == 'START_MENU') return startMenu()


}