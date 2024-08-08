const express = require('express');
const app = express();
const port = 3000;

// Corrija o caminho para o arquivo de conexão
const connectDB = require('./config/database.js');
const instituicoesRoutes = require('./routes/instituicoesRoutes.js');

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api', instituicoesRoutes);

// Inicie o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

