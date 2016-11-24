'use strict'

const botBuilder = require('claudia-bot-builder')
const spaceFlow = require('./bot/flow')

const api = botBuilder((message, req) => {
  console.log(message, req)
  return spaceFlow(message, req)
});

api.addPostDeployConfig('nasaApiKey', 'NASA API Key:', 'configure-bot');

module.exports = api;
