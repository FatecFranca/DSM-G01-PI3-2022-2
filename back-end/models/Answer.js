const mongoose = require('mongoose')

const schema = mongoose.Schema({
    question: {
        type: mongoose.ObjectId,
        ref: 'Question',
        required: true
    },
    /*
        Valores possíveis para o campo "answer":
        Y: sim (yes)
        N: no (não)
        X: não aplicável (not applicable)
        P: resposta adiada (postponed)
    */
    answer: {
        type: String,
        required: true,
        enum: ['Y', 'N', 'X', 'P']
    },
    comment: {
        type: String,
        required: false
    },
    answered_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

/*
    Parâmetros de mongoose.model:
    1º: o nome do model, para uso interno. Por convenção,
        usa-se Inicial Maiúscula.
    2º: a relação de campos do esquema (variável schema)
    3º: o nome da collection no banco de dados (normalmente,
        é o mesmo nome do model, mas pluralizado e com
        inicial minúscula)
*/
module.exports = mongoose.model('Answer', schema, 'answers')