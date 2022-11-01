const mongoose = require("mongoose");

const schema = mongoose.Schema({
  question: {
    type: mongoose.ObjectId,
    ref: "Question",
    required: true,
    index: true,
  },
  /*
        Valores possíveis para o campo "answer":
        Y: sim (yes)
        N: no (não)
        X: não aplicável (not applicable)
        P: resposta adiada (postponed)
    */
  answer: {
    type: String,
    required: true,
    enum: ["Y", "N", "X", "P"],
  },
  comment: {
    type: String,
    required: false,
  },
  answered_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = schema;
