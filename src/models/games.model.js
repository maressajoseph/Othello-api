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
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  });

  const boxSchema = new Schema({
    box: { type: Boolean, default: undefined },
    row: { type: Number },
    column: { type: Number }
  });

  const gamesSchema = new Schema({
    board: [boxSchema],
    players: [playerSchema],
    winner: { type: Number, required: false },
    draw: { type: Boolean, required: false, default: false },
    turn: { type: Number, required: true, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', gamesSchema);
};
