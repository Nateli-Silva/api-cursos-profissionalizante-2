const express = require('express');
const router = express.Router();
const instituicoesController = require('../controllers/instituicoesController');

router.get('/sugestoes-instituicoes', instituicoesController.getSugestoesInstituicoes);
router.get('/instituicoes-cursos/:id', instituicoesController.getInstituicoesCursosById);

module.exports = router;