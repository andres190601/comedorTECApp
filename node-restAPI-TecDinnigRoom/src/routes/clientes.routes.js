import { Router } from 'express';
import {
    getClientes,
    getClienteByCarnet,
    getClienteByCedula,
    getTipoUsuario,
    eliminarCliente,
    actualizarCliente,
    getPedidoXIdPersona } from "../controllers/clientes.controller";

    const router = Router();

// Rutas de manejo de clientes

// GET Clientes
router.get('/clientes',getClientes);

router.get('/clientes/carnet/:carnet', getClienteByCarnet);

router.get('/clientes/cedula/:cedula', getClienteByCedula);

router.get('/clientes/tipoUsuario', getTipoUsuario);

router.post('/clientes/actualizar', actualizarCliente);

router.get('/clientes/:id',getPedidoXIdPersona)

// DELETE Clientes

router.delete('/clientes/:carnet', eliminarCliente);



export default router