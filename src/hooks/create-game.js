// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    defineColor() => {
      if (hook.data.players === []) {return true}
      else {return false}
    }
    const {user} = hooks.params
    const game = {
      userId: user._id,
      players: [{
        userId: user._id,
        name: user.name,
        color: defineColor(),
        score: 0
      }]
    }
    return Promise.resolve(hook);
  };
};
