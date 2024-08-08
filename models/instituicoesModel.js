const mongoose = require('mongoose');

const instituicaoSchema = new mongoose.Schema({
    name: String,
    descricao: String,
    website: String,
    cursos: [String]
});

const Instituicao = mongoose.model('Instituicao', instituicaoSchema);

module.exports = Instituicao;
