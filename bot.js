'use strict';

var botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(request => {
  return `Hello this is Space Explorer, your message was ${request.text}.`;
});
