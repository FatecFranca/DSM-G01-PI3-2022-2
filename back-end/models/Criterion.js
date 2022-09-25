const mongoose = require("mongoose");

const schema = mongoose.Schema({
  order: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
});

/*
  Parâmetros de mongoose.model:
  1°: O nome do model, para uso interno. Por conveção usa-se Inicial Maiúscula.
  2°: A relação de campos do esquema (variável schema)
  3°: O nome da collection no banco de dados (normalmente, é o mesmo nome do model,
    mas pluralizado e com inicial minúscula)
*/

module.exports = mongoose.model("Criterion", schema, "criterions");
