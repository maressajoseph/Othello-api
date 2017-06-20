// games-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const playerSchema = new Schema({
    name: { type: String, required: true },
    color: { type: Boolean, required: true },
    score: { type: Number, required: true, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'user' }
  });

  const boxSchema = new Schema({
    box: { type: Boolean, default: undefined },
    row: { type: Number, required: true },
    column: { type: Number, required: true }
  });

  const gamesSchema = new Schema({
    board: [boxSchema],
    players: [playerSchema],
    started: { type: Boolean, default: false, required: true },
    winner: { type: Number, required: false },
    draw: { type: Boolean, required: false, default: false },
    turn: { type: Number, required: true, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', gamesSchema);
};
