const mongoose = require("mongoose");

const schema = mongoose.Schema({
  // Campo de chave estrangeira para model User
  criterion: {
    type: mongoose.ObjectId, // Tipo especial
    ref: "Criterion", // Coleção referenciada
    index: true,
  },
  order: {
    type: Number,
    required: true,
    index: true,
  },
  enunciation: {
    type: String,
    required: true,
  },
  glossary_refs: [{
    type: mongoose.ObjectId, // Tipo especial
    ref: "Glossary", // Coleção referenciada
    required: true,
  }],
});

/*
  Parâmetros de mongoose.model:
  1°: O nome do model, para uso interno. Por conveção usa-se Inicial Maiúscula.
  2°: A relação de campos do esquema (variável schema)
  3°: O nome da collection no banco de dados (normalmente, é o mesmo nome do model,
    mas pluralizado e com inicial minúscula)
*/

module.exports = mongoose.model("Question", schema, "questions");
