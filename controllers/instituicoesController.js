import mongoose from 'mongoose';
import Instituicao from '../models/instituicoesModel.js';
import Curso from '../models/cursoModel.js'; 


export const getSugestoesInstituicoes = async (req, res) => {
    try {
        const instituicoes = await Instituicao.find({});
        res.json(instituicoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar instituições' });
    }
};


export const getInstituicoesCursosById = async (req, res) => {
    try {
        const instituicaoId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(instituicaoId)) {
            return res.status(400).json({ error: 'ID inválido' });
        }
         const dadosInstituicao = await Instituicao.findById(instituicaoId);
         if (dadosInstituicao) {
             const cursos = dadosInstituicao.cursos;
            res.json(cursos);
        } else {
            res.status(404).json({ error: 'Instituição não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar instituição' });
    }
};


export const getSugestoesCursosOnline = async (req, res) => {
    try {
        const cursosOnline = await Curso.find({}); 
        res.json(cursosOnline);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cursos online' });
    }
};