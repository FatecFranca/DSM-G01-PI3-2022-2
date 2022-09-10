const mongoose = require("mongoose");

// usa desestruturação para obter as variáveis de ambiente necessárias para fazer a conexão

const { MONGODB_USER, MONGODB_PASS, MONGODB_SERVER, MONGODB_DATABASE } =
  process.env;

module.exports = function () {
  mongoose.connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  mongoose.connection.on("connected", () =>
    console.log("** Mongoose conectado ao seridor remoto **"),
  );

  mongoose.connection.on("error", (erro) =>
    console.log("*** Mongoose: ERRO DE CONEXÃO. Causa: " + erro),
  );
};
