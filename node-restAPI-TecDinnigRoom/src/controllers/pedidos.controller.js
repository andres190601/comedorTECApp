import { getConnection } from '../database/connection'

export const getPedidos = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('idPedido', parseInt(req.params.id))
    .execute('readPedidos');
    res.json(result.recordset);
};

export const eliminarPedido = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idPedido', parseInt(req.params.id))
        .execute('borrarPedido')
    res.json(result.recordset)
};

export const actualizarPedido = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idPedido', parseInt(req.body.id))
        .input('idCliente', parseInt(req.body.id_cliente))
        .input('fechaCompra', req.body.fechaCompra)
        .execute('modificarCompra')
    res.json(result)

};

export const getPedidoXId= async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idCompra', parseInt(req.params.id))
        .execute('readPedidosXCompra')
    res.json(result)
};