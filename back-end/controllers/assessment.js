const Assessment = require("../models/Assessment");
const Answer = require("../models/Answer");

const controller = {}; // Objeto vazio

controller.create = async (req, res) => {
  try {
    await Assessment.create(req.body);
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
    // find() sem parâmetros retorna todos os documentos
    // da coleção
    const result = await Assessment.find().populate("user");
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
    const result = await Assessment.findById(req.params.id);

    // HTTP 200: OK (implícito)
    if (result) res.send(result); // Encontrou o documento
    // HTTP 404: Not Found
    else res.status(404).end(); // Não encontrou
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.update = async (req, res) => {
  try {
    const result = await Assessment.findByIdAndUpdate(req.params.id, req.body);

    // HTTP 204: No content
    if (result) return res.status(204).end(); // Encontrou e atualizou
    else res.status(404).end(); // Não encontrou
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.delete = async (req, res) => {
  try {
    const result = await Assessment.findByIdAndDelete(req.params.id);

    // HTTP 204: No content
    if (result) res.status(204).end(); // Encontrou e excluiu
    else res.status(404).end(); // Não encontrou
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

/*******************************************************************
 * Métodos para o model Answer
 */

controller.createAnswer = async (req, res) => {
  try {
    // 1) Encontra a avaliação (assessment) por meio do parâmetro
    // :assessment_id
    const assessment = await Assessment.findById(req.params.assessment_id);

    if (assessment) {
      // 2) Verifica se o campo "answers" já existe na avaliação
      if (assessment.answers) {
        // 2.1) Verifica se uma resposta para a pergunta
        // especificada já existe no vetor
        const idx = assessment.answers.findIndex(
          (a) => a.question.toString() === req.body.question,
        );
        console.log({ idx });
        if (idx >= 0) {
          // Já existe uma resposta para a pergunta no vetor "answers"
          assessment.answers[idx] = req.body;
        } else {
          // Insere a resposta (req.body) no vetor "answers"
          assessment.answers.push(req.body);
        }
      } else {
        // Cria o vetor "answers" com o primeiro elemento
        assessment.answers = [];
        assessment.answers.push(req.body.id);
      }

      // Atualiza assessment
      const result = await Assessment.findByIdAndUpdate(
        req.params.assessment_id,
        assessment,
      );

      // HTTP 204: No content
      if (result) return res.status(204).end(); // Encontrou e atualizou
      else res.status(404).end(); // Não encontrou
    }
    // HTTP 404: Not Found
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.retrieveAllAnswers = async (req, res) => {
  try {
    const assessment = await Assessment.findById(
      req.params.assessment_id,
    ).populate({ path: "answers", populate: { path: "question" } });

    // HTTP 200: OK (implícito)
    if (assessment) res.send(assessment.answers);
    // HTTP 404: Not Found
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.retrieveOneAnswer = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.assessment_id);
    if (assessment) {
      const result = assessment.answers.id(req.params.id);
      if (result) {
        res.send(result);
      } else {
        res.status(404).end();
      }
    } else {
      // HTTP 404: Not Found
      res.status(404).end();
    }
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.updateAnswer = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.assessment_id);
    if (assessment && assessment.answers.id(req.params.id)) {
      // Atualiza os campos da resposta
      assessment.answers.id(req.params.id).question = req.body.question;
      assessment.answers.id(req.params.id).answer = req.body.answer;
      assessment.answers.id(req.params.id).comment = req.body.comment;
      assessment.answers.id(req.params.id).answered_at = req.body.answered_at;

      // Marca o campo "answers" como modificado
      assessment.markModified("answers");

      await assessment.save();

      res.status(204).end();
    } else res.status(404).end();
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

controller.deleteAnswer = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.assessment_id);
    if (assessment && assessment.answers.id(req.params.id)) {
      // Exclui o subdocumento relativo a resposta
      assessment.answers.id(req.params.id).remove();

      await assessment.save();

      res.status(204).end();
    } else res.status(404).end();
  } catch (error) {
    console.error(error);
    // HTTP 500: Internal Server Error
    res.status(500).send(error);
  }
};

module.exports = controller;
