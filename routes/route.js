import express from 'express';
const router = express.Router();
import controller from '../controllers/controller.js'
const controle = new controller();

router.get('/', controle.home)
router.get('/teste', controle.teste)
router.get('/aluno/lst', controle.list)
router.post('/aluno/lst', controle.list)
router.post('/formulario', controle.formulario)
export default router