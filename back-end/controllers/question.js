const Question = require("../models/Question");

const controller = {}; // Objeto vazio

controller.create = async (req, res) => {
  try {
    await Question.create(req.body);
    // HTTP 201: Created
    res.status(201).end();
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.retrieveAll = async (req, res) => {
  try {
    let result;
    // Se existir "crieterion" na queryString
    if (req.query.criterion) {
      // Retorna só as questões de um determinado critério ordenadas pelo campo order
      result = await Question.find({ criterion: req.query.criterion })
        .populate("criterion")
        .populate("glossary_refs")
        .sort({ order: 1 });
    } else {
      // Retorna todas as questões, na ordem natural
      result = await Question.find()
        .populate("criterion")
        .populate("glossary_refs");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.retrieveOne = async (req, res) => {
  try {
    const result = await Question.findById(req.params.id);

    // HTTP 200: OK (implícito)
    if (result) {
      // Encontrou o documento
      res.send(result);
    } else {
      res.status(404).end(); // Não encontrou
    }
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.update = async (req, res) => {
  try {
    const result = await Question.findByIdAndUpdate(req.params.id, req.body);

    // HTTP 204: No content
    if (result) {
      return res.status(204).end(); // Encontrou e atualizou
    } else {
      res.status(404).end(); // Não encontrou
    }
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.delete = async (req, res) => {
  try {
    const result = await Question.findByIdAndDelete(req.params.id);

    if (result) {
      res.status(204).end(); // Encontrou e excluiu
    } else {
      res.status(404).end; // Não encontrou
    }
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

module.exports = controller;
