// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    console.log(hook.data)
    console.log(hook.data.players)
    console.log(hook.params)

    defineColor = () => {
      if (hook.data.players === undefined) { return true }
      else { return false }
    }

    createBoard = () => {
      [[{
        box: undefined,
        row: 1,
        column: 1
      },
      {
        box: undefined,
        row: 1,
        column: 2
      },
      {
        box: undefined,
        row: 1,
        column: 3
      },
      {
        box: undefined,
        row: 1,
        column: 4
      },
      {
        box: undefined,
        row: 1,
        column: 5
      },
      {
        box: undefined,
        row: 1,
        column: 6
      },
      {
        box: undefined,
        row: 1,
        column: 7
      },
      {
        box: undefined,
        row: 1,
        column: 8
      }],
      [{
        box: undefined,
        row: 2,
        column: 1
      },
      {
        box: undefined,
        row: 2,
        column: 2
      },
      {
        box: undefined,
        row: 2,
        column: 3
      },
      {
        box: undefined,
        row: 2,
        column: 4
      },
      {
        box: undefined,
        row: 2,
        column: 5
      },
      {
        box: undefined,
        row: 2,
        column: 6
      },
      {
        box: undefined,
        row: 2,
        column: 7
      },
      {
        box: undefined,
        row: 2,
        column: 8
      }],
      [{
        box: undefined,
        row: 3,
        column: 1
      },
      {
        box: undefined,
        row: 3,
        column: 2
      },
      {
        box: undefined,
        row: 3,
        column: 3
      },
      {
        box: undefined,
        row: 3,
        column: 4
      },
      {
        box: undefined,
        row: 3,
        column: 5
      },
      {
        box: undefined,
        row: 3,
        column: 6
      },
      {
        box: undefined,
        row: 3,
        column: 7
      },
      {
        box: undefined,
        row: 3,
        column: 8
      }],
      [{
        box: undefined,
        row: 4,
        column: 1
      },
      {
        box: undefined,
        row: 4,
        column: 2
      },
      {
        box: undefined,
        row: 4,
        column: 3
      },
      {
        box: true,
        row: 4,
        column: 4
      },
      {
        box: false,
        row: 4,
        column: 5
      },
      {
        box: undefined,
        row: 4,
        column: 6
      },
      {
        box: undefined,
        row: 4,
        column: 7
      },
      {
        box: undefined,
        row: 4,
        column: 8
      }],
      [{
        box: undefined,
        row: 5,
        column: 1
      },
      {
        box: undefined,
        row: 5,
        column: 2
      },
      {
        box: undefined,
        row: 5,
        column: 3
      },
      {
        box: false,
        row: 5,
        column: 4
      },
      {
        box: true,
        row: 5,
        column: 5
      },
      {
        box: undefined,
        row: 5,
        column: 6
      },
      {
        box: undefined,
        row: 5,
        column: 7
      },
      {
        box: undefined,
        row: 5,
        column: 8
      }],
      [{
        box: undefined,
        row: 6,
        column: 1
      },
      {
        box: undefined,
        row: 6,
        column: 2
      },
      {
        box: undefined,
        row: 6,
        column: 3
      },
      {
        box: undefined,
        row: 6,
        column: 4
      },
      {
        box: undefined,
        row: 6,
        column: 5
      },
      {
        box: undefined,
        row: 6,
        column: 6
      },
      {
        box: undefined,
        row: 6,
        column: 7
      },
      {
        box: undefined,
        row: 6,
        column: 8
      }],
      [{
        box: undefined,
        row: 7,
        column: 1
      },
      {
        box: undefined,
        row: 7,
        column: 2
      },
      {
        box: undefined,
        row: 7,
        column: 3
      },
      {
        box: undefined,
        row: 7,
        column: 4
      },
      {
        box: undefined,
        row: 7,
        column: 5
      },
      {
        box: undefined,
        row: 7,
        column: 6
      },
      {
        box: undefined,
        row: 7,
        column: 7
      },
      {
        box: undefined,
        row: 7,
        column: 8
      }],
      [{
        box: undefined,
        row: 8,
        column: 1
      },
      {
        box: undefined,
        row: 8,
        column: 2
      },
      {
        box: undefined,
        row: 8,
        column: 3
      },
      {
        box: undefined,
        row: 8,
        column: 4
      },
      {
        box: undefined,
        row: 8,
        column: 5
      },
      {
        box: undefined,
        row: 8,
        column: 6
      },
      {
        box: undefined,
        row: 8,
        column: 7
      },
      {
        box: undefined,
        row: 8,
        column: 8
      }]]
    }

    const { user } = hook.params
    const game = {
      userId: user._id,
      players: [{
        userId: user._id,
        name: user.name,
        color: defineColor(),
        score: 0
      }],
      board: createBoard()
    }
    return Promise.resolve(hook);
  };
};
