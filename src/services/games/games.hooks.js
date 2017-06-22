const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');

const ownerSchema = {
  include: {
    service: 'users',
    nameAs: 'owner',
    parentField: 'userId',
    childField: '_id',
  }
};

const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

const createGame = require('../../hooks/create-game');

const joinGame = require('../../hooks/join-game');

const click = require('../../hooks/click');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      restrictToAuthenticated(),
      associateCurrentUser({ as: 'userId' }),
      createGame()
    ],
    update: [...restrict, joinGame(), click()],
    patch: [...restrict, joinGame(), click()],
    remove: [...restrict]
  },

  after: {
    all: [
      populate({ schema: ownerSchema })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
