// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

    if (hook.data.click === undefined) return Promise.resolve(hook);

    const { user } = hook.params;


    return hook.app.service('games').get(hook.id)
      .then((game) => {
        const { players, turn, board } = game;
        const playerIds = players.map((p) => (p.userId.toString()));
        const joined = playerIds.includes(user._id.toString());
        const hasTurn = playerIds.indexOf(user._id.toString()) === turn;

        if (!hasTurn) {
          throw new errors.Unprocessable('It is not your turn')
        }
        console.log(turn);

        const newBoard = board.map((b,i) => {
          if (i === hook.data.click && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          else if (i === hook.data.click && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          return b;

        });

        let newTurn = turn + 1;
        if (newTurn === 2) newTurn = 0;
        hook.data.turn = newTurn;


        hook.data.board = newBoard;


        //colors need to be changed when closed in



    });



    return Promise.resolve(hook);
  };
};
