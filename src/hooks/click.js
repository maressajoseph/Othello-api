// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

    if (hook.data.click === undefined) return Promise.resolve(hook);

    const { user } = hook.params;

    const boxNumber  = hook.data.click

    return hook.app.service('games').get(hook.id)
      .then((game) => {
        const { players, turn, board, winner, draw } = game;
        const playerIds = players.map((p) => (p.userId.toString()));
        const joined = playerIds.includes(user._id.toString());
        const hasTurn = playerIds.indexOf(user._id.toString()) === turn;
        let p1Score = players[0].score
        let p2Score = players[1].score
        const player1 = players[0]
        const player2 = players[1]


        if (!hasTurn) {
          throw new errors.Unprocessable('It is not your turn')
        }

        if (board[boxNumber].box !== undefined) {
          throw new errors.Unprocessable('You cannot pick this box, pick another one that does not have a color yet')
        }

        const newBoard = board.map((b,i) => {
          var r = board[boxNumber].row
          var c = board[boxNumber].column

          if (i === boxNumber && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          else if (i === boxNumber && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          return b;

        });

        hook.data.board = newBoard;

        const checkedBoxes = newBoard.filter(function(b){
            return b.box !== undefined
        });

        const pinkBoxes = newBoard.filter(function(b){
            return b.box === true
        });

        const greenBoxes = newBoard.filter(function(b){
            return b.box === false
        });

        let newPlayers = players;
         newPlayers[0].score = (pinkBoxes.length);
         newPlayers[1].score = (greenBoxes.length);
         hook.data.players = newPlayers;

        let newTurn = turn + 1;
        if (newTurn === 2) newTurn = 0;
        hook.data.turn = newTurn;

        console.log(checkedBoxes.length)


        if (checkedBoxes.length === 64) {
          if (pinkBoxes.length > greenBoxes.length) {
            hook.data.winner = 0
          }
          else if (pinkBoxes.length === greenBoxes.length) {
            hook.data.draw = true
          }
          hook.data.winner = 1
        }


        for (var r = board[boxNumber].row; r < 9; r++) {
          console.log(r);
        }


        });

    };

    return Promise.resolve(hook);
};
