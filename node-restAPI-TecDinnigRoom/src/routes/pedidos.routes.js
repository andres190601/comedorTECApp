import { Router } from "express";
import { eliminarPedido, getPedidos, actualizarPedido, getPedidoXId } from '../controllers/pedidos.controller.js'
const router = Router()


//RUTAS PEDIDO

router.get('/pedidos/filtro/:id',getPedidos)

router.get('/pedidos/:id',getPedidoXId)

router.delete('/pedidos/:id', eliminarPedido)

router.put('/pedidos', actualizarPedido)
export default router