import { getConnection } from '../database/connection'



//OBTENER TODOS LOS SPECIAL
export const procesarCompra = async (req, res) => {
    console.log(req.body)

    const pool = await getConnection()
    const result = await pool.request()
        .input('jsonAlimentos', JSON.stringify(req.body.json))
        .input('idCliente',parseInt(req.body.id) )
        .execute('generarCompra')

    res.json(result)
};


//BUSCAR ALIMENTO POR ID
export const getInfoCompra = async (req,res)=>{
    console.log('ando por aqui')
    const pool = await getConnection()
    const result = await pool.request()
        .input('idCompra', req.params.id)
        .input('estado',req.params.estado) 
        .execute('infoCompra')
    console.log(result);
    res.json(result.recordset)
};