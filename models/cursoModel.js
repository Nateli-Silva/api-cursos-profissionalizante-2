import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    instituicao: { type: mongoose.Schema.Types.ObjectId, ref: 'instituicaos' } 
   }, { collection: 'on_cursos'
   
    
   
   
});

const Curso = mongoose.model('on_cursos', cursoSchema);

export default Curso;

