// Carrega as variáveis de ambiente (arquivo .env)
require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

// Conexão ao banco de dados remoto
const connectDb = require("./config/database");
connectDb();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

/* Rotas da aplicação*/
const userRouter = require("./routes/user");
app.use("/user", userRouter);

const assessmentRouter = require("./routes/assessment");
app.use("/assessment", assessmentRouter);

const answerRouter = require("./routes/answer");
app.use("/answer", answerRouter);

const criterionRouter = require("./routes/criterion");
app.use("/criterion", criterionRouter);

const glossaryRouter = require("./routes/glossary");
app.use("/glossary", glossaryRouter);

const questionRouter = require("./routes/question");
app.use("/question", questionRouter);

module.exports = app;
