const express = require('express');
const app = express();
const port = 3000;

const connectDB = require('./config/database'); // Atualizado para a nova localização
const instituicoesRoutes = require('./routes/instituicoesRoutes');

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api', instituicoesRoutes);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
