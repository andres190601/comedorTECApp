import {Router} from "express";
import {getAlimentos,eliminarAlimento,getAlimentosID,getTipoAlimento} from '../controllers/alimentos.controller'
const router = Router()

//RUTAS ALIMENTOS
router.get('/alimentos',getAlimentos)
router.get('/alimentos/:id',getAlimentosID)

router.post('/alimentos',)
router.delete('/alimentos/:id',eliminarAlimento)
router.put('/alimentos',)

//RUTAS TIPOS DE ALIEMNTO
router.get('/tipoAlimento',getTipoAlimento)

export default router