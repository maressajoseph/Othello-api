const games = require('./games/games.service.js');

const users = require('./users/users.service.js');

module.exports = function () {
  const app = this;
  app.configure(games);
  app.configure(users);
};
