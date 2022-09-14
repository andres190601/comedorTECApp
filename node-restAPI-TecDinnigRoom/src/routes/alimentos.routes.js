import {Router} from "express";
import {getAlimentos,eliminarAlimento,getAlimentosID,getTipoAlimento,agregarAlimento} from '../controllers/alimentos.controller'
const router = Router()

//RUTAS ALIMENTOS
router.get('/alimentos',getAlimentos)
router.get('/alimentos/:id',getAlimentosID)

router.post('/alimentos',agregarAlimento)
router.delete('/alimentos/:id',eliminarAlimento)
router.put('/alimentos',)

//RUTAS TIPOS DE ALIEMNTO
router.get('/tipoAlimento',getTipoAlimento)

export default router