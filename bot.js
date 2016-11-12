'use strict';
var botBuilder = require('claudia-bot-builder'),
  vbTemplate = require botBuilder.viberTemplate;

var mainMenu = () => {
  return vbTemplate.Text(`Hello, this is Space Explorer, your message was ${request.text}`)
    .addReplyKeyboard()
    .addKeyboardButton('Astronomy Picture of the Day', 'reply', 'APOD', 3, 2)
    .addKeyboardButton('Photos from Mars Rovers', 'reply', 'ROVERS', 3, 2)
    .addKeyboardButton('Space Station Position', 'reply', 'ISS', 3, 2)
    .addKeyboardButton('People in Space', 'reply', 'PEOPLE_IN_SPACE', 3, 2)
    .addKeyboardButton('About Bot', 'reply', 'ABOUT', 6, 1)
    .get();
};

module.exports = botBuilder(request => {
  if (request.text == 'MAIN_MENU')
    return mainMenu();

  return `Hello this is Space Explorer, your message was ${request.text}.`;
});
