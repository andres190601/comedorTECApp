import { getConnection } from '../database/connection'

// OBTENER TODOS LOS CLIENTES
export const getClientes = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().execute('obtenerClientes');
    res.json(result.recordset);
};

// BUSCA CLIENTE POR CARNET
export const getClienteByCarnet = async (req, res) => {
    const { carnet } = req.params;
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('carnet', carnet)
        .execute('getCliente_carnet');
    res.json(result.recordset);
};

// BUSCA CLIENTE POR CEDULA
export const getClienteByCedula = async (req, res) => {
    const { cedula } = req.params;
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('cedula', cedula)
        .execute('getCliente_cedula');
    res.json(result.recordset);
};

// OBTENER TIPOS DE CLIENTE
export const getTipoUsuario = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().execute('getTipoUsuario');
    console.log(result);
    res.json(result.recordset)
};

// ACTUALIZAR USUARIO
export const actualizarCliente = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('idPersona', parseInt(req.body.idPersona))
        .input('nombre', req.body.nombre)
        .input('apellido1', req.body.apellido1)
        .input('apellido2', req.body.apellido2)
        .input('carnet', parseInt(req.body.carnet))
        .input('cedula', parseInt(req.body.cedula))
        .input('edad', parseInt(req.body.edad))
        .input('fechaNacimiento', req.body.fechaNacimiento)
        .input('correo', req.body.correo)
        .input('contrasenia', req.body.contrasenia)
        .execute('actualizarCliente');
    console.log(result);
    res.json(result);
}

// ELIMINAR CLIENTE
export const eliminarCliente = async (req, res) => {
    console.log(req.params);
    const { carnet } = req.params;
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('carnet', carnet)
        .execute('borrarCliente')
    console.log('Borrado ' + req.params.cedula);
    res.json(result);
};

