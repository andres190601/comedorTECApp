import { Router } from "express";
import {
    getAlimentos, eliminarAlimento, getAlimentosID, getTipoAlimento,
    agregarAlimento, modificarAlimento, obtenerAlimentoSpecial, getTiempos, asignarTiempo, getAlimentoxTiempo
} from '../controllers/alimentos.controller'
const router = Router()

//RUTAS ALIMENTOS
router.get('/alimentos', getAlimentos)
router.get('/alimentos/:id', getAlimentosID)

router.post('/alimentos', agregarAlimento)
router.delete('/alimentos/:id', eliminarAlimento)
router.put('/alimentos', modificarAlimento)

router.get('/alimentosSpecial', obtenerAlimentoSpecial) //ALIMENTO ESPECIAL (para el select)

//RUTAS TIPOS DE ALIEMNTO
router.get('/tipoAlimento', getTipoAlimento)

//RUTAS TIEMPOS DE COMIDA
router.get('/tiempo', getTiempos)
router.post('/tiempo', asignarTiempo)

//RUTAS ALIMENTOXTIEMPO
router.get('/tiempo/alimento/:tiempo', getAlimentoxTiempo)

export default router