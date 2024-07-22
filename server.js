const express = require('express');
const app = express();
const port = 3000;


const instituicoes = [
    {
        id: 1,
        name: 'SENAR',
        descricao: 'Serviço Nacional de Aprendizagem Rural',
        website: 'https://www.ead.senar.org.br/',
        cursos: ['Administração Rural', 'Agroindústria', 'Aquicultura', 'Construções Rurais', 'Irrigação', 'Paisagismo'] 
    },
    {
        id: 2,
        name: 'PROA',
        descricao: 'O Instituto PROA é uma ONG no Brasil que prepara jovens de baixa renda para o mercado de trabalho através de cursos e programas educacionais',
        website: 'https://www.proa.org.br/',
        cursos: ['Administração', 'tecnologia da informação', 'comunicação e liderança']
    },
    {
        id: 3,
        name: 'Programadores do Amanhã',
        descricao: 'O Instituto Programadores do Amanhã capacita e emprega jovens pretos, pardos e indígenas na área de tecnologia, em parceria com grandes empresas, promovendo inclusão e impacto econômico positivo.',
        website: 'https://programadoresdoamanha.org/',
        cursos: ['programação',]
    },
    
];


app.get('/sugestoes-instituicoes', (req, res) => {
    const nomesInstituicoes = instituicoes.map(inst => inst.name);
    res.json(nomesInstituicoes);
});


app.get('/instituicoes-cursos/:id', (req, res) => {
    const instituicaoId = parseInt(req.params.id);
    const dadosInstituicao = instituicoes.find(inst => inst.id === instituicaoId);

    if (dadosInstituicao) {
        res.json(dadosInstituicao.cursos);
    } else {
        res.status(404).json({ error: 'Instituição não encontrada' });
    }
});


app.get('/sugestoes-cursos-online', (req, res) => {
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
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
