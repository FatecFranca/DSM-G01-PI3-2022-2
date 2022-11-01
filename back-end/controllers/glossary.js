const Glossary = require("../models/Glossary");

const controller = {}; // Objeto vazio

controller.create = async (req, res) => {
  try {
    await Glossary.create(req.body);
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
    // find() sem parâmetros retorna todos os documentos da coleção
    const result = await Glossary.find().sort({ entry: 1});
    // HTTP 200: OK (implícito)
    res.send(result);
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.retrieveOne = async (req, res) => {
  try {
    const result = await Glossary.findById(req.params.id);

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
    const result = await Glossary.findByIdAndUpdate(req.params.id, req.body);

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
    const result = await Glossary.findByIdAndDelete(req.params.id);

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
