import express from 'express';
import { getSugestoesInstituicoes, getInstituicoesCursosById, getSugestoesCursosOnline } from '../controllers/instituicoesController.js';

const router = express.Router();


router.get('/instituicoes', getSugestoesInstituicoes);


router.get('/instituicoes/:id/cursos', getInstituicoesCursosById);


router.get('/cursos', getSugestoesCursosOnline);

export default router;

