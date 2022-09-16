import { Router } from "express";
import {procesarCompra} from '../controllers/compras.controller'
import {getInfoCompra} from '../controllers/compras.controller'
const router = Router()

//Ruta par compras 
router.get('/compras/:id/:estado',getInfoCompra)
//RUTAS ALIMENTOS
router.post('/compra', procesarCompra)

router.post('/toCar', function(req, res){
    console.log(req.user)
    console.log(req.body)
    const {idProduct, cant} = req.body;
    var info = {
        idAlimento: Number(idProduct),
        cantidad: Number(cant)
    };
    JSON.stringify(info)
    req.user.carritoCompra.push(info);
    console.log(req.user)
    console.log(req.body)
    
    res.send('success')
  });

export default router