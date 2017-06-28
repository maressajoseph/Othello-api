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
        const playerScore = players.map((p) => (p.score));
        const joined = playerIds.includes(user._id.toString());
        const hasTurn = playerIds.indexOf(user._id.toString()) === turn;
        let p1Score = players[0].score
        let p2Score = players[1].score
        const player1 = players[0]
        const player2 = players[1]


        if (!hasTurn) {
          throw new errors.Unprocessable('It is not your turn!')
        }

        if (board[boxNumber].box !== undefined) {
          throw new errors.Unprocessable('Pick another box that does not have a color yet!')
        }
        //horizontal
        if (boxNumber === 0 || boxNumber === 8 || boxNumber === 16 || boxNumber === 24 || boxNumber === 32 || boxNumber === 40 || boxNumber === 48 || boxNumber === 56) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+3].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && turn === 1 && board[boxNumber+3].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && turn === 0 && board[boxNumber+4].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && turn === 1 && board[boxNumber+4].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && turn === 0 && board[boxNumber+5].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && turn === 1 && board[boxNumber+5].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && board[boxNumber+5].box === false && turn === 0 && board[boxNumber+6].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && board[boxNumber+5].box === true && turn === 1 && board[boxNumber+6].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && board[boxNumber+5].box === false && board[boxNumber+6].box === false && turn === 0 && board[boxNumber+56].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
            var hhhhhh = boxNumber+6
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && board[boxNumber+5].box === true && board[boxNumber+6].box === true && turn === 1 && board[boxNumber+56].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
            var hhhhhh = boxNumber+6
          }
        }

        if (boxNumber === 1 || boxNumber === 9 || boxNumber === 17 || boxNumber === 25 || boxNumber === 33 || boxNumber === 41 || boxNumber === 49 || boxNumber === 57) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+3].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && turn === 1 && board[boxNumber+3].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && turn === 0 && board[boxNumber+4].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && turn === 1 && board[boxNumber+4].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && turn === 0 && board[boxNumber+5].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && turn === 1 && board[boxNumber+5].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && board[boxNumber+5].box === false && turn === 0 && board[boxNumber+6].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && board[boxNumber+5].box === true && turn === 1 && board[boxNumber+6].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
            var hhhhh = boxNumber+5
          }
        }

        if (boxNumber === 2 || boxNumber === 10 || boxNumber === 18 || boxNumber === 26 || boxNumber === 34 || boxNumber === 42 || boxNumber === 50 || boxNumber === 58) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+3].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && turn === 1 && board[boxNumber+3].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && turn === 0 && board[boxNumber+4].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && turn === 1 && board[boxNumber+4].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && board[boxNumber+4].box === false && turn === 0 && board[boxNumber+5].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && board[boxNumber+4].box === true && turn === 1 && board[boxNumber+5].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
            var hhhh = boxNumber+4
          }
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
        }

        if (boxNumber === 3 || boxNumber === 11 || boxNumber === 19 || boxNumber === 27 || boxNumber === 35 || boxNumber === 43 || boxNumber === 51 || boxNumber === 59) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+3].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && turn === 1 && board[boxNumber+3].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && board[boxNumber+3].box === false && turn === 0 && board[boxNumber+4].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && board[boxNumber+3].box === true && turn === 1 && board[boxNumber+4].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
            var hhh = boxNumber+3
          }
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && turn === 0 && board[boxNumber-3].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && turn === 1 && board[boxNumber-3].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
        }

        if (boxNumber === 4 || boxNumber === 12 || boxNumber === 20 || boxNumber === 28 || boxNumber === 36 || boxNumber === 44 || boxNumber === 52 || boxNumber === 60) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber+1].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+3].box === true) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber+1].box === true && board[boxNumber+2].box === true && turn === 1 && board[boxNumber+3].box === false) {
            var h = boxNumber+1
            var hh = boxNumber+2
          }
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && turn === 0 && board[boxNumber-3].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && turn === 1 && board[boxNumber-3].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && turn === 0 && board[boxNumber-4].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && turn === 1 && board[boxNumber-4].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
        }

        if (boxNumber === 5 || boxNumber === 13 || boxNumber === 21 || boxNumber === 29 || boxNumber === 37 || boxNumber === 45 || boxNumber === 53 || boxNumber === 61) {
          if (board[boxNumber+1].box === false && turn === 0 && board[boxNumber+2].box === true) {var h = boxNumber+1}
          if (board[boxNumber+1].box === true && turn === 1 && board[boxNumber+2].box === false) {var h = boxNumber+1}
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && turn === 0 && board[boxNumber-3].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && turn === 1 && board[boxNumber-3].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && turn === 0 && board[boxNumber-4].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && turn === 1 && board[boxNumber-4].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && turn === 0 && board[boxNumber-5].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && turn === 1 && board[boxNumber-5].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
        }

        if (boxNumber === 6 || boxNumber === 14 || boxNumber === 22 || boxNumber === 30 || boxNumber === 38 || boxNumber === 46 || boxNumber === 54 || boxNumber === 62) {
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && turn === 0 && board[boxNumber-3].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && turn === 1 && board[boxNumber-3].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && turn === 0 && board[boxNumber-4].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && turn === 1 && board[boxNumber-4].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && turn === 0 && board[boxNumber-5].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && turn === 1 && board[boxNumber-5].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && board[boxNumber-5].box === false && turn === 0 && board[boxNumber-6].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && board[boxNumber-5].box === true && turn === 1 && board[boxNumber-6].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
          }
        }

        if (boxNumber === 7 || boxNumber === 15 || boxNumber === 23 || boxNumber === 31 || boxNumber === 39 || boxNumber === 47 || boxNumber === 55 || boxNumber === 63) {
          if (board[boxNumber-1].box === false && turn === 0 && board[boxNumber-2].box === true) {var h = boxNumber-1}
          if (board[boxNumber-1].box === true && turn === 1 && board[boxNumber-2].box === false) {var h = boxNumber-1}
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && turn === 0 && board[boxNumber-3].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && turn === 1 && board[boxNumber-3].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && turn === 0 && board[boxNumber-4].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && turn === 1 && board[boxNumber-4].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && turn === 0 && board[boxNumber-5].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && turn === 1 && board[boxNumber-5].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && board[boxNumber-5].box === false && turn === 0 && board[boxNumber-6].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && board[boxNumber-5].box === true && turn === 1 && board[boxNumber-6].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
          }
          if (board[boxNumber-1].box === false && board[boxNumber-2].box === false && board[boxNumber-3].box === false && board[boxNumber-4].box === false && board[boxNumber-5].box === false && board[boxNumber-6].box === false && turn === 0 && board[boxNumber-7].box === true) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
            var hhhhhh = boxNumber-6
          }
          if (board[boxNumber-1].box === true && board[boxNumber-2].box === true && board[boxNumber-3].box === true && board[boxNumber-4].box === true && board[boxNumber-5].box === true && board[boxNumber-6].box === true && turn === 1 && board[boxNumber-7].box === false) {
            var h = boxNumber-1
            var hh = boxNumber-2
            var hhh = boxNumber-3
            var hhhh = boxNumber-4
            var hhhhh = boxNumber-5
            var hhhhhh = boxNumber-6
          }
        }

        //vertical
        if (boxNumber === 0 || boxNumber === 1 || boxNumber === 2 || boxNumber === 3 || boxNumber === 4 || boxNumber === 5 || boxNumber === 6 || boxNumber === 7) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+2].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+2].box === false) {var v = boxNumber+8}
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && turn === 0 && board[boxNumber+24].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && turn === 1 && board[boxNumber+24].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && turn === 0 && board[boxNumber+32].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && turn === 1 && board[boxNumber+32].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && turn === 0 && board[boxNumber+40].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && turn === 1 && board[boxNumber+40].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && board[boxNumber+40].box === false && turn === 0 && board[boxNumber+48].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && board[boxNumber+40].box === true && turn === 1 && board[boxNumber+48].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && board[boxNumber+40].box === false && board[boxNumber+48].box === false && turn === 0 && board[boxNumber+56].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
            var vvvvvv = boxNumber+48
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && board[boxNumber+40].box === true && board[boxNumber+48].box === true && turn === 1 && board[boxNumber+56].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
            var vvvvvv = boxNumber+48
          }
        }

        if (boxNumber === 8 || boxNumber === 9 || boxNumber === 10 || boxNumber === 11 || boxNumber === 12 || boxNumber === 13 || boxNumber === 14 || boxNumber === 15) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+16].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+16].box === false) {var v = boxNumber+8}
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && turn === 0 && board[boxNumber+24].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && turn === 1 && board[boxNumber+24].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && turn === 0 && board[boxNumber+32].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && turn === 1 && board[boxNumber+32].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && turn === 0 && board[boxNumber+40].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && turn === 1 && board[boxNumber+40].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && board[boxNumber+40].box === false && turn === 0 && board[boxNumber+48].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && board[boxNumber+40].box === true && turn === 1 && board[boxNumber+48].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
            var vvvvv = boxNumber+40
          }
        }

        if (boxNumber === 16 || boxNumber === 17 || boxNumber === 18 || boxNumber === 19 || boxNumber === 20 || boxNumber === 21 || boxNumber === 22 || boxNumber === 23) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+16].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+16].box === false) {var v = boxNumber+8}
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && turn === 0 && board[boxNumber+24].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && turn === 1 && board[boxNumber+24].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && turn === 0 && board[boxNumber+32].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && turn === 1 && board[boxNumber+32].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && board[boxNumber+32].box === false && turn === 0 && board[boxNumber+40].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && board[boxNumber+32].box === true && turn === 1 && board[boxNumber+40].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
            var vvvv = boxNumber+32
          }
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
        }

        if (boxNumber === 24 || boxNumber === 25 || boxNumber === 26 || boxNumber === 27 || boxNumber === 28 || boxNumber === 29 || boxNumber === 30 || boxNumber === 31) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+16].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+16].box === false) {var v = boxNumber+8}
          if (board[boxNumber+8].box === false && board[boxNumber+2].box === false && turn === 0 && board[boxNumber+24].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && turn === 1 && board[boxNumber+24].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && board[boxNumber+24].box === false && turn === 0 && board[boxNumber+32].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && board[boxNumber+24].box === true && turn === 1 && board[boxNumber+32].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
            var vvv = boxNumber+24
          }
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && turn === 0 && board[boxNumber-24].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && turn === 1 && board[boxNumber-24].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
        }

        if (boxNumber === 32 || boxNumber === 33 || boxNumber === 34 || boxNumber === 35 || boxNumber === 36 || boxNumber === 37 || boxNumber === 38 || boxNumber === 39) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+16].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+16].box === false) {var v = boxNumber+8}
          if (board[boxNumber+8].box === false && board[boxNumber+16].box === false && turn === 0 && board[boxNumber+24].box === true) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber+8].box === true && board[boxNumber+16].box === true && turn === 1 && board[boxNumber+24].box === false) {
            var v = boxNumber+8
            var vv = boxNumber+16
          }
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && turn === 0 && board[boxNumber-24].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && turn === 1 && board[boxNumber-24].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && turn === 0 && board[boxNumber-32].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && turn === 1 && board[boxNumber-32].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
        }

        if (boxNumber === 40 || boxNumber === 41 || boxNumber === 42 || boxNumber === 43 || boxNumber === 44 || boxNumber === 45 || boxNumber === 46 || boxNumber === 47) {
          if (board[boxNumber+8].box === false && turn === 0 && board[boxNumber+16].box === true) {var v = boxNumber+8}
          if (board[boxNumber+8].box === true && turn === 1 && board[boxNumber+16].box === false) {var v = boxNumber+8}
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && turn === 0 && board[boxNumber-24].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && turn === 1 && board[boxNumber-24].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && turn === 0 && board[boxNumber-32].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && turn === 1 && board[boxNumber-32].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && turn === 0 && board[boxNumber-40].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && turn === 1 && board[boxNumber-40].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
        }

        if (boxNumber === 48 || boxNumber === 49 || boxNumber === 50 || boxNumber === 51 || boxNumber === 52 || boxNumber === 53 || boxNumber === 54 || boxNumber === 55) {
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && turn === 0 && board[boxNumber-24].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && turn === 1 && board[boxNumber-24].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && turn === 0 && board[boxNumber-32].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && turn === 1 && board[boxNumber-32].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && turn === 0 && board[boxNumber-40].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && turn === 1 && board[boxNumber-40].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && board[boxNumber-40].box === false && turn === 0 && board[boxNumber-48].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && board[boxNumber-40].box === true && turn === 1 && board[boxNumber-48].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
          }
        }

        if (boxNumber === 56 || boxNumber === 57 || boxNumber === 58 || boxNumber === 59 || boxNumber === 60 || boxNumber === 61 || boxNumber === 62 || boxNumber === 63) {
          if (board[boxNumber-8].box === false && turn === 0 && board[boxNumber-16].box === true) {var v = boxNumber-8}
          if (board[boxNumber-8].box === true && turn === 1 && board[boxNumber-16].box === false) {var v = boxNumber-8}
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && turn === 0 && board[boxNumber-24].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && turn === 1 && board[boxNumber-24].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && turn === 0 && board[boxNumber-32].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && turn === 1 && board[boxNumber-32].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && turn === 0 && board[boxNumber-40].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && turn === 1 && board[boxNumber-40].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && board[boxNumber-40].box === false && turn === 0 && board[boxNumber-48].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && board[boxNumber-40].box === true && turn === 1 && board[boxNumber-48].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
          }
          if (board[boxNumber-8].box === false && board[boxNumber-16].box === false && board[boxNumber-24].box === false && board[boxNumber-32].box === false && board[boxNumber-40].box === false && board[boxNumber-48].box === false && turn === 0 && board[boxNumber-56].box === true) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
            var vvvvvv = boxNumber-48
          }
          if (board[boxNumber-8].box === true && board[boxNumber-16].box === true && board[boxNumber-24].box === true && board[boxNumber-32].box === true && board[boxNumber-40].box === true && board[boxNumber-48].box === true && turn === 1 && board[boxNumber-56].box === false) {
            var v = boxNumber-8
            var vv = boxNumber-16
            var vvv = boxNumber-24
            var vvvv = boxNumber-32
            var vvvvv = boxNumber-40
            var vvvvvv = boxNumber-48
          }
        }

        //diagonal /
        if (boxNumber === 16 || boxNumber === 61 || boxNumber === 17 || boxNumber === 18 || boxNumber === 19 || boxNumber === 20 || boxNumber === 21 || boxNumber === 29 || boxNumber === 37 || boxNumber === 45 || boxNumber === 53 || boxNumber === 24 || boxNumber === 24 || boxNumber === 25 || boxNumber === 32 || boxNumber === 40 || boxNumber === 33 || boxNumber === 26 || boxNumber === 48 || boxNumber === 41 || boxNumber === 34 || boxNumber === 27 || boxNumber === 56 || boxNumber === 49 || boxNumber === 42 || boxNumber === 35 || boxNumber === 28 || boxNumber === 57 || boxNumber === 50 || boxNumber === 43 || boxNumber === 36 || boxNumber === 58 || boxNumber === 51 || boxNumber === 44 || boxNumber === 59 || boxNumber === 52 || boxNumber === 60) {
          if (board[boxNumber-7].box === false && turn === 0 && board[boxNumber-14].box === true) {var d = boxNumber-7}
          if (board[boxNumber-7].box === true && turn === 1 && board[boxNumber-14].box === false) {var d = boxNumber-7}
        }
        if (boxNumber === 2 || boxNumber === 47 || boxNumber === 3 || boxNumber === 4 || boxNumber === 5 || boxNumber === 6 || boxNumber === 7 || boxNumber === 15 || boxNumber === 23 || boxNumber === 31 || boxNumber === 39 || boxNumber === 10 || boxNumber === 11 || boxNumber === 12 || boxNumber === 13 || boxNumber === 14 || boxNumber === 22 || boxNumber === 30 || boxNumber === 38 || boxNumber === 46 || boxNumber === 18 || boxNumber === 19 || boxNumber === 20 || boxNumber === 21 || boxNumber === 29 || boxNumber === 37 || boxNumber === 45 || boxNumber === 44 || boxNumber === 36 || boxNumber === 28 || boxNumber === 27 || boxNumber === 26 || boxNumber === 34 || boxNumber === 35 || boxNumber === 43 || boxNumber === 42) {
          if (board[boxNumber+7].box === false && turn === 0 && board[boxNumber+14].box === true) {var d = boxNumber+7}
          if (board[boxNumber+7].box === true && turn === 1 && board[boxNumber+14].box === false) {var d = boxNumber+7}
        }
        if (boxNumber === 24 || boxNumber === 32 || boxNumber === 40 || boxNumber === 48 || boxNumber === 56 || boxNumber === 57 || boxNumber === 58 || boxNumber === 59 || boxNumber === 60 || boxNumber === 25 || boxNumber === 26 || boxNumber === 27 || boxNumber === 28 || boxNumber === 36 || boxNumber === 44 || boxNumber === 52 || boxNumber === 33 || boxNumber === 41 || boxNumber === 49 || boxNumber === 50 || boxNumber === 51 || boxNumber === 34 || boxNumber === 42 || boxNumber === 35 || boxNumber === 43) {
          if (board[boxNumber-7].box === false && board[boxNumber-14].box === false && turn === 0 && board[boxNumber-21].box === true) {
            var d = boxNumber-7
            var dd = boxNumber-14
          }
          if (board[boxNumber-7].box === true && board[boxNumber-14].box === true && turn === 1 && board[boxNumber-21].box === false) {
            var d = boxNumber-7
            var dd = boxNumber-14
          }
        }
        if (boxNumber === 3 || boxNumber === 4 || boxNumber === 5 || boxNumber === 6 || boxNumber === 7 || boxNumber === 15 || boxNumber === 23 || boxNumber === 31 || boxNumber === 39 || boxNumber === 11 || boxNumber === 12 || boxNumber === 13 || boxNumber === 14 || boxNumber === 22 || boxNumber === 30 || boxNumber === 38 || boxNumber === 37 || boxNumber === 29 || boxNumber === 21 || boxNumber === 20 || boxNumber === 19 || boxNumber === 27 || boxNumber === 28 || boxNumber === 36 || boxNumber === 35) {
          if (board[boxNumber+7].box === false && board[boxNumber+14].box === false && turn === 0 && board[boxNumber+21].box === true) {
            var d = boxNumber+7
            var dd = boxNumber+14
          }
          if (board[boxNumber+7].box === true && board[boxNumber+14].box === true && turn === 1 && board[boxNumber+21].box === false) {
            var d = boxNumber+7
            var dd = boxNumber+14
          }
        }
        if (boxNumber === 32 || boxNumber === 40 || boxNumber === 48 || boxNumber === 56 || boxNumber === 57 || boxNumber === 58 || boxNumber === 59 || boxNumber === 51 || boxNumber === 50 || boxNumber === 49 || boxNumber === 41 || boxNumber === 33 || boxNumber === 34 || boxNumber === 42 || boxNumber === 43 || boxNumber === 35) {
          if (board[boxNumber-7].box === false && board[boxNumber-14].box === false && board[boxNumber-21].box === false && turn === 0 && board[boxNumber-28].box === true) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
          }
          if (board[boxNumber-7].box === true && board[boxNumber-14].box === true && board[boxNumber-21].box === true && turn === 1 && board[boxNumber-28].box === false) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
          }
        }
        if (boxNumber === 4 || boxNumber === 12 || boxNumber === 20 || boxNumber === 28 || boxNumber === 29 || boxNumber === 30 || boxNumber === 31 || boxNumber === 5 || boxNumber === 13 || boxNumber === 21 || boxNumber === 22 || boxNumber === 23 || boxNumber === 6 || boxNumber === 14 || boxNumber === 15 || boxNumber === 7) {
          if (board[boxNumber+7].box === false && board[boxNumber+14].box === false && board[boxNumber+21].box === false && turn === 0 && board[boxNumber+28].box === true) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
          }
          if (board[boxNumber+7].box === true && board[boxNumber+14].box === true && board[boxNumber+21].box === true && turn === 1 && board[boxNumber+28].box === false) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
          }
        }
        if (boxNumber === 40 || boxNumber === 41 || boxNumber === 42 || boxNumber === 50 || boxNumber === 58 || boxNumber === 57 || boxNumber === 56 || boxNumber === 48 || boxNumber === 49) {
          if (board[boxNumber-7].box === false && board[boxNumber-14].box === false && board[boxNumber-21].box === false && board[boxNumber-28].box === false && turn === 0 && board[boxNumber-35].box === true) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
          }
          if (board[boxNumber-7].box === true && board[boxNumber-14].box === true && board[boxNumber-21].box === true && board[boxNumber-28].box === true && turn === 1 && board[boxNumber-35].box === false) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
          }
        }
        if (boxNumber === 5 || boxNumber === 13 || boxNumber === 21 || boxNumber === 22 || boxNumber === 23 || boxNumber === 6 || boxNumber === 14 || boxNumber === 15 || boxNumber === 7) {
          if (board[boxNumber+7].box === false && board[boxNumber+14].box === false && board[boxNumber+21].box === false && board[boxNumber+28].box === false && turn === 0 && board[boxNumber+35].box === true) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
          }
          if (board[boxNumber+7].box === true && board[boxNumber+14].box === true && board[boxNumber+21].box === true && board[boxNumber+28].box === true && turn === 1 && board[boxNumber+35].box === false) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
          }
        }
        if (boxNumber === 48 || boxNumber === 49 || boxNumber === 57 || boxNumber === 56) {
          if (board[boxNumber-7].box === false && board[boxNumber-14].box === false && board[boxNumber-21].box === false && board[boxNumber-28].box === false && board[boxNumber-35].box === false && turn === 0 && board[boxNumber-42].box === true) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
            var ddddd = boxNumber-35
          }
          if (board[boxNumber-7].box === true && board[boxNumber-14].box === true && board[boxNumber-21].box === true && board[boxNumber-28].box === true && board[boxNumber-35].box === true && turn === 1 && board[boxNumber-42].box === false) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
            var ddddd = boxNumber-35
          }
        }
        if (boxNumber === 6 || boxNumber === 14 || boxNumber === 15 || boxNumber === 7) {
          if (board[boxNumber+7].box === false && board[boxNumber+14].box === false && board[boxNumber+21].box === false && board[boxNumber+28].box === false && board[boxNumber+35].box === false && turn === 0 && board[boxNumber+42].box === true) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
            var ddddd = boxNumber+35
          }
          if (board[boxNumber+7].box === true && board[boxNumber+14].box === true && board[boxNumber+21].box === true && board[boxNumber+28].box === true && board[boxNumber+35].box === true && turn === 1 && board[boxNumber+42].box === false) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
            var ddddd = boxNumber+35
          }
        }
        if (boxNumber === 56) {
          if (board[boxNumber-7].box === false && board[boxNumber-14].box === false && board[boxNumber-21].box === false && board[boxNumber-28].box === false && board[boxNumber-35].box === false && board[boxNumber-42].box === false && turn === 0 && board[boxNumber-49].box === true) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
            var ddddd = boxNumber-35
            var dddddd = boxNumber-42
          }
          if (board[boxNumber-7].box === true && board[boxNumber-14].box === true && board[boxNumber-21].box === true && board[boxNumber-28].box === true && board[boxNumber-35].box === true && board[boxNumber-42].box === true && turn === 1 && board[boxNumber-49].box === false) {
            var d = boxNumber-7
            var dd = boxNumber-14
            var ddd = boxNumber-21
            var dddd = boxNumber-28
            var ddddd = boxNumber-35
            var dddddd = boxNumber-42
          }
        }
        if (boxNumber === 7) {
          if (board[boxNumber+7].box === false && board[boxNumber+14].box === false && board[boxNumber+21].box === false && board[boxNumber+28].box === false && board[boxNumber+35].box === false && board[boxNumber+42].box === false && turn === 0 && board[boxNumber+49].box === true) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
            var ddddd = boxNumber+35
            var dddddd = boxNumber+42
          }
          if (board[boxNumber+7].box === true && board[boxNumber+14].box === true && board[boxNumber+21].box === true && board[boxNumber+28].box === true && board[boxNumber+35].box === true && board[boxNumber+42].box === true && turn === 1 && board[boxNumber+49].box === false) {
            var d = boxNumber+7
            var dd = boxNumber+14
            var ddd = boxNumber+21
            var dddd = boxNumber+28
            var ddddd = boxNumber+35
            var dddddd = boxNumber+42
          }
        }

        //diagonal \
        if (boxNumber === 23 || boxNumber === 22 || boxNumber === 21 || boxNumber === 20 || boxNumber === 19 || boxNumber === 18 || boxNumber === 26 || boxNumber === 34 || boxNumber === 42 || boxNumber === 50 || boxNumber === 58 || boxNumber === 31 || boxNumber === 30 || boxNumber === 29 || boxNumber === 28 || boxNumber === 27 || boxNumber === 35 || boxNumber === 43 || boxNumber === 51 || boxNumber === 59 || boxNumber === 39 || boxNumber === 38 || boxNumber === 37 || boxNumber === 36 || boxNumber === 44 || boxNumber === 52 || boxNumber === 60 || boxNumber === 47 || boxNumber === 46 || boxNumber === 45 || boxNumber === 53 || boxNumber === 61 || boxNumber === 55 || boxNumber === 54 || boxNumber === 62 || boxNumber === 63) {
          if (board[boxNumber-9].box === false && turn === 0 && board[boxNumber-18].box === true) {var d = boxNumber-9}
          if (board[boxNumber-9].box === true && turn === 1 && board[boxNumber-18].box === false) {var d = boxNumber-9}
        }
        if (boxNumber === 5 || boxNumber === 13 || boxNumber === 31 || boxNumber === 29 || boxNumber === 37 || boxNumber === 45 || boxNumber === 44 || boxNumber === 43 || boxNumber === 42 || boxNumber === 41 || boxNumber === 40 || boxNumber === 4 || boxNumber === 3 || boxNumber === 2 || boxNumber === 1 || boxNumber === 0 || boxNumber === 8 || boxNumber === 16 || boxNumber === 24 || boxNumber === 33 || boxNumber === 12 || boxNumber === 11 || boxNumber === 10 || boxNumber === 9 || boxNumber === 17 || boxNumber === 25 || boxNumber === 33 || boxNumber === 20 || boxNumber === 19 || boxNumber === 18 || boxNumber === 26 || boxNumber === 34 || boxNumber === 28 || boxNumber === 27 || boxNumber === 35 || boxNumber === 36) {
          if (board[boxNumber+9].box === false && turn === 0 && board[boxNumber+18].box === true) {var d = boxNumber+9}
          if (board[boxNumber+9].box === true && turn === 1 && board[boxNumber+18].box === false) {var d = boxNumber+9}
        }
        if (boxNumber === 31 || boxNumber === 30 || boxNumber === 29 || boxNumber === 28 || boxNumber === 27 || boxNumber === 35 || boxNumber === 43 || boxNumber === 51 || boxNumber === 59 || boxNumber === 39 || boxNumber === 38 || boxNumber === 37 || boxNumber === 36 || boxNumber === 44 || boxNumber === 52 || boxNumber === 60 || boxNumber === 47 || boxNumber === 46 || boxNumber === 45 || boxNumber === 53 || boxNumber === 61 || boxNumber === 55 || boxNumber === 54 || boxNumber === 62 || boxNumber === 63) {
          if (board[boxNumber-9].box === false && board[boxNumber-18].box === false && turn === 0 && board[boxNumber-27].box === true) {
            var d = boxNumber-9
            var dd = boxNumber-18
          }
          if (board[boxNumber-9].box === true && board[boxNumber-18].box === true && turn === 1 && board[boxNumber-27].box === false) {
            var d = boxNumber-9
            var dd = boxNumber-18
          }
        }
        if (boxNumber === 4 || boxNumber === 3 || boxNumber === 2 || boxNumber === 1 || boxNumber === 0 || boxNumber === 8 || boxNumber === 16 || boxNumber === 24 || boxNumber === 33 || boxNumber === 12 || boxNumber === 11 || boxNumber === 10 || boxNumber === 9 || boxNumber === 17 || boxNumber === 25 || boxNumber === 33 || boxNumber === 20 || boxNumber === 19 || boxNumber === 18 || boxNumber === 26 || boxNumber === 34 || boxNumber === 28 || boxNumber === 27 || boxNumber === 35 || boxNumber === 36) {
          if (board[boxNumber+9].box === false && board[boxNumber+18].box === false && turn === 0 && board[boxNumber+27].box === true) {
            var d = boxNumber+9
            var dd = boxNumber+18
          }
          if (board[boxNumber+9].box === true && board[boxNumber+18].box === true && turn === 1 && board[boxNumber+27].box === false) {
            var d = boxNumber+9
            var dd = boxNumber+18
          }
        }
        if (boxNumber === 63 || boxNumber === 55 || boxNumber === 54 || boxNumber === 62 || boxNumber === 47 || boxNumber === 46 || boxNumber === 45 || boxNumber === 53 || boxNumber === 61 || boxNumber === 39 || boxNumber === 38 || boxNumber === 37 || boxNumber === 36 || boxNumber === 44 || boxNumber === 52 || boxNumber === 60) {
          if (board[boxNumber-9].box === false && board[boxNumber-18].box === false && board[boxNumber-27].box === false && turn === 0 && board[boxNumber-36].box === true) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
          }
          if (board[boxNumber-9].box === true && board[boxNumber-18].box === true && board[boxNumber-27].box === true && turn === 1 && board[boxNumber-36].box === false) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
          }
        }
        if (boxNumber === 3 || boxNumber === 2 || boxNumber === 1 || boxNumber === 0 || boxNumber === 8 || boxNumber === 16 || boxNumber === 24 || boxNumber === 11 || boxNumber === 10 || boxNumber === 9 || boxNumber === 17 || boxNumber === 25 || boxNumber === 19 || boxNumber === 18 || boxNumber === 26 || boxNumber === 27) {
          if (board[boxNumber+9].box === false && board[boxNumber+18].box === false && board[boxNumber+27].box === false && turn === 0 && board[boxNumber+36].box === true) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
          }
          if (board[boxNumber+9].box === true && board[boxNumber+18].box === true && board[boxNumber+27].box === true && turn === 1 && board[boxNumber+36].box === false) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
          }
        }
        if (boxNumber === 63 || boxNumber === 55 || boxNumber === 54 || boxNumber === 62 || boxNumber === 47 || boxNumber === 46 || boxNumber === 45 || boxNumber === 53 || boxNumber === 61) {
          if (board[boxNumber-9].box === false && board[boxNumber-18].box === false && board[boxNumber-27].box === false && board[boxNumber-36].box === false && turn === 0 && board[boxNumber-45].box === true) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
          }
          if (board[boxNumber-9].box === true && board[boxNumber-18].box === true && board[boxNumber-27].box === true && board[boxNumber-36].box === true && turn === 1 && board[boxNumber-45].box === false) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
          }
        }
        if (boxNumber === 0 || boxNumber === 1 || boxNumber === 2 || boxNumber === 8 || boxNumber === 9 || boxNumber === 16 || boxNumber === 17 || boxNumber === 10 || boxNumber === 18) {
          if (board[boxNumber+9].box === false && board[boxNumber+18].box === false && board[boxNumber+27].box === false && board[boxNumber+36].box === false && turn === 0 && board[boxNumber+45].box === true) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
          }
          if (board[boxNumber+9].box === true && board[boxNumber+18].box === true && board[boxNumber+27].box === true && board[boxNumber+36].box === true && turn === 1 && board[boxNumber+45].box === false) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
          }
        }
        if (boxNumber === 63 || boxNumber === 55 || boxNumber === 54 || boxNumber === 62) {
          if (board[boxNumber-9].box === false && board[boxNumber-18].box === false && board[boxNumber-27].box === false && board[boxNumber-36].box === false && board[boxNumber-45].box === false && turn === 0 && board[boxNumber-54].box === true) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
            var ddddd = boxNumber-45
          }
          if (board[boxNumber-9].box === true && board[boxNumber-18].box === true && board[boxNumber-27].box === true && board[boxNumber-36].box === true && board[boxNumber-45].box === true && turn === 1 && board[boxNumber-54].box === false) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
            var ddddd = boxNumber-45
          }
        }
        if (boxNumber === 0 || boxNumber === 1 || boxNumber === 8 || boxNumber === 9) {
          if (board[boxNumber+9].box === false && board[boxNumber+18].box === false && board[boxNumber+27].box === false && board[boxNumber+36].box === false && board[boxNumber+45].box === false && turn === 0 && board[boxNumber+54].box === true) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
            var ddddd = boxNumber+45
          }
          if (board[boxNumber+9].box === true && board[boxNumber+18].box === true && board[boxNumber+27].box === true && board[boxNumber+36].box === true && board[boxNumber+45].box === true && turn === 1 && board[boxNumber+54].box === false) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
            var ddddd = boxNumber+45
          }
        }
        if (boxNumber === 63) {
          if (board[boxNumber-9].box === false && board[boxNumber-18].box === false && board[boxNumber-27].box === false && board[boxNumber-36].box === false && board[boxNumber-45].box === false && board[boxNumber-54].box === false && turn === 0 && board[boxNumber-63].box === true) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
            var ddddd = boxNumber-45
            var dddddd = boxNumber-54
          }
          if (board[boxNumber-9].box === true && board[boxNumber-18].box === true && board[boxNumber-27].box === true && board[boxNumber-36].box === true && board[boxNumber-45].box === true && board[boxNumber-54].box === true && turn === 1 && board[boxNumber-63].box === false) {
            var d = boxNumber-9
            var dd = boxNumber-18
            var ddd = boxNumber-27
            var dddd = boxNumber-36
            var ddddd = boxNumber-45
            var dddddd = boxNumber-54
          }
        }
        if (boxNumber === 0) {
          if (board[boxNumber+9].box === false && board[boxNumber+18].box === false && board[boxNumber+27].box === false && board[boxNumber+36].box === false && board[boxNumber+45].box === false && board[boxNumber+54].box === false && turn === 0 && board[boxNumber+63].box === true) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
            var ddddd = boxNumber+45
            var dddddd = boxNumber+54
          }
          if (board[boxNumber+9].box === true && board[boxNumber+18].box === true && board[boxNumber+27].box === true && board[boxNumber+36].box === true && board[boxNumber+45].box === true && board[boxNumber+54].box === true && turn === 1 && board[boxNumber+63].box === false) {
            var d = boxNumber+9
            var dd = boxNumber+18
            var ddd = boxNumber+27
            var dddd = boxNumber+36
            var ddddd = boxNumber+45
            var dddddd = boxNumber+54
          }
        }



        const newBoard = board.map((b,i) => {
          var r = board[boxNumber].row
          var c = board[boxNumber].column

          if (i === boxNumber && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === boxNumber && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === h && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === h && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === hh && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === hh && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === hhh && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === hhh && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === hhhh && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === hhhh && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === hhhhh && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === hhhhh && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === hhhhhh && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === hhhhhh && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === v && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === v && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === vv && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === vv && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === vvv && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === vvv && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === vvvv && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === vvvv && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === vvvvv && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === vvvvv && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === vvvvvv && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === vvvvvv && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === d && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === d && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === dd && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === dd && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === ddd && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === ddd && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === dddd && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === dddd && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === ddddd && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === ddddd && turn === 1) {
            return Object.assign({}, b, { box: false });
          }
          if (i === dddddd && turn === 0) {
            return Object.assign({}, b, { box: true });
          }
          if (i === dddddd && turn === 1) {
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

        if (checkedBoxes.length === 64) {
          if (pinkBoxes.length > greenBoxes.length) {
            hook.data.winner = 0
          }
          else if (pinkBoxes.length === greenBoxes.length) {
            hook.data.draw = true
          }
          else {
            hook.data.winner = 1
          }
        }

        });
        return Promise.resolve(hook);
    };
};
