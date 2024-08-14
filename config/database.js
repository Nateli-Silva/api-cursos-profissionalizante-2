import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/API_final');
        console.log('Conectado ao MongoDB Local');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB Local:', error.message);
        process.exit(1);
    }
};

export default connectDB;
