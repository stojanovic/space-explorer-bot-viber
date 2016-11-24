'use strict'

const botBuilder = require('claudia-bot-builder')
const spaceFlow = require('./bot/flow')

module.exports = botBuilder((message, req) => {
  console.log(message, req)
  return spaceFlow(message, req) //`Hello this is Space Explorer, your message was ${request.text}.`;
});
