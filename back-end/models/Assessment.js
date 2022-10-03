const mongoose = require('mongoose')

const schema = mongoose.Schema({
    // Campo de chave estrangeira para o model User
    user: {
        type: mongoose.ObjectId, // Tipo especial
        ref: 'User',    // Coleção referenciada
        required: true
    },
    name: {
        type: String,
        required: true
    },
    object: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now() // Data/hora atual
    },
    finished_at: {
        type: Date
    },
    answers: [{
        type: mongoose.ObjectId,
        ref: 'Answer'
    }]
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
module.exports = mongoose.model('Assessment', schema, 'assessments')