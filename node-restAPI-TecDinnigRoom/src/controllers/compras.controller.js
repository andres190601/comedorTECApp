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