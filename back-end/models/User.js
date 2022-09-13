const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {unique: true} // Índice único para não permitir dados duplicados
  },
  password_hash: {
    type: String,
    required: true,
    select: false // Este campo não pode aparecer nas consultas
  },
  id_admin: {
    type: Boolean,
    required: true,
    default: false // Por padrão, novos usuários NÃO SÃO admin
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now() // Data atual
  }
})

/*
  Parâmetros de mongoose.model:
  1°: O nome do model, para uso interno. Por conveção usa-se Inicial Maiúscula.
  2°: A relação de campos do esquema (variável schema)
  3°: O nome da collection no banco de dados (normalmente, é o mesmo nome do model,
    mas pluralizado e com inicial minúscula)
*/

module.exports = mongoose.model('User', schema, 'users')
