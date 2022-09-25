const mongoose = require("mongoose");

const schema = mongoose.Schema({
  // Campo de chave estrangeira para model User
  assessment: {
    type: mongoose.ObjectId, // Tipo especial
    ref: "Assessment", // Coleção referenciada
    required: true,
  },
  question: {
    type: mongoose.ObjectId, // Tipo especial
    ref: "Question", // Coleção referenciada
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  answered_at: {
    type: Date,
    required: true,
    default: Date.now(), // Data atual
  },
});

/*
  Parâmetros de mongoose.model:
  1°: O nome do model, para uso interno. Por conveção usa-se Inicial Maiúscula.
  2°: A relação de campos do esquema (variável schema)
  3°: O nome da collection no banco de dados (normalmente, é o mesmo nome do model,
    mas pluralizado e com inicial minúscula)
*/

module.exports = mongoose.model("Answer", schema, "answers");
