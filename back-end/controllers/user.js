const User = require('../models/User')

const controller = {} // Objeto vazio

/*
  Métodos de CRUD do controller

  create: cria um novo usuário
  retrieve: retorna todos os usuários cadastrados
  retrieveOne: Retorna um único usuário
  update: atualiza os dados de um usuário
  delete: exclui um usuário
*/

controller.create = async (req, res) => {
  try {
    await User.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
  } catch (error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).send(error)
  }
}

module.exports = controller
