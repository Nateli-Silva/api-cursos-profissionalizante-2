import express from 'express';
import connectDB from './config/database.js';
import instituicoesRoutes from './routes/instituicoesRoutes.js';

const app = express();
const port = 3003;

connectDB();


app.use(express.json());


app.use('/api', instituicoesRoutes);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

