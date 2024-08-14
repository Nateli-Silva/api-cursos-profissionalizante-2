import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
    nome: String,
    descricao: String
});

const instituicaoSchema = new mongoose.Schema({
    nome: String, 
    descricao: String,
    website: String,
    cursos: [cursoSchema] 
});

const Instituicao = mongoose.model('Instituicaos', instituicaoSchema);

export default Instituicao;
