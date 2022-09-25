const mongoose = require("mongoose");

const schema = mongoose.Schema({
  // Campo de chave estrangeira para model User
  user: {
    type: mongoose.ObjectId, // Tipo especial
    ref: "User", // Coleção referenciada
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  object: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(), // Data atual
  },
  fineshed_at: {
    type: Date,
  },
});

/*
  Parâmetros de mongoose.model:
  1°: O nome do model, para uso interno. Por conveção usa-se Inicial Maiúscula.
  2°: A relação de campos do esquema (variável schema)
  3°: O nome da collection no banco de dados (normalmente, é o mesmo nome do model,
    mas pluralizado e com inicial minúscula)
*/

module.exports = mongoose.model("Assessment", schema, "assessments");
