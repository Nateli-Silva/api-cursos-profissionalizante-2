const Instituicao = require('../models/instituicoesModel');

const getSugestoesInstituicoes = async (req, res) => {
    try {
        const instituicoes = await Instituicao.find({}, 'name');
        const nomesInstituicoes = instituicoes.map(inst => inst.name);
        res.json(nomesInstituicoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar instituições' });
    }
};

const getInstituicoesCursosById = async (req, res) => {
    try {
        const instituicaoId = req.params.id;
        const dadosInstituicao = await Instituicao.findById(instituicaoId);

        if (dadosInstituicao) {
            res.json(dadosInstituicao.cursos);
        } else {
            res.status(404).json({ error: 'Instituição não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar instituição' });
    }
};

const getSugestoesCursosOnline = async (req, res) => {
    // Mantenha os dados estáticos ou crie um modelo similar para cursos online
    const cursosOnline = [
        {
            plataforma: 'Fundação Bradesco',
            cursos: ['Administrando Banco de Dados', 'Desenvolvimento Orientado a Objetos Utilizando a Linguagem Python', 'Excel na Prática', 'Design Thinking para Educadores']
        },
        {
            plataforma: 'Udacity',
            cursos: ['Curso de Inteligência Artificial', 'Curso de Análise de Dados', 'Curso de Desenvolvimento de Apps']
        },
        {
            plataforma: 'SEBRAE',
            cursos: ['Aprender a empreender', 'Como planejar o seu negócio', 'Marketing digital para o empreendedor']
        }
    ];
    res.json(cursosOnline);
};

module.exports = {
    getSugestoesInstituicoes,
    getInstituicoesCursosById,
    getSugestoesCursosOnline
};
