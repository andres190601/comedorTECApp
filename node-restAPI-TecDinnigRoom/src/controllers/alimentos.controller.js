import { getConnection } from '../database/connection'

//OBTENER TODOS LOS ALIMENTOS
export const getAlimentos = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('tipoAlimento', '')
        .input('idAlimento', '')
        .execute('readAlimentos')
    res.json(result.recordset)
};

//OBTENER TODOS LOS SPECIAL
export const obtenerAlimentoSpecial = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .execute('alimentosSelect')

    res.json(result.recordset)
};

//OBTENER TODOS LOS SPECIAL
export const getAlimentoxTiempo = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idTiempo', parseInt(req.params.tiempo))
        .execute('Alimentos_Tiempo')

    res.json(result.recordset)
};


//BUSCAR ALIMENTO POR ID
export const getAlimentosID = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('tipoAlimento', '')
        .input('idAlimento', req.params.id)
        .execute('readAlimentos')

    res.json(result.recordset)
};

//ELIMINAR ALIMENTO
export const eliminarAlimento = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idAlimento', parseInt(req.params.id))
        .execute('borrarAlimento')
    res.json(result.recordset)
};

//OBTENER TIPOS
export const getTipoAlimento = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .execute('readTipoAlimento')
    res.json(result.recordset)
};

//OBTENER TIEMPOS
export const getTiempos = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .execute('tiemposSelect')
    res.json(result.recordset)
};

//AGREGAR ALIMENTO
export const agregarAlimento = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('nombreAlimento', req.body.nombre)
        .input('tipoAlimento', parseInt(req.body.tipo))
        .input('disponibilidad', parseInt(req.body.disponibilidad))
        .input('precio', parseInt(req.body.precio))
        .execute('agregarAlimento')

    res.json(result)
};

//ASIGNAR TIEMPO COMIDA 
export const asignarTiempo = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input('idAlimento', parseInt(req.body.idAlimento))
        .input('idComida', parseInt(req.body.idComida))
        .execute('asignarTiempoComida')

    res.json(result)
};

//MODIFICAR ALIMENTO
export const modificarAlimento = async (req, res) => {
    let disponibilidad=1;
    if (req.body.disponibilidad = ''){
        disponibilidad = 0;
    }

    const pool = await getConnection()
    const result = await pool.request()
        .input('idAlimento', req.body.id)
        .input('nombreAlimento', req.body.nombre)
        .input('tipoAlimento', parseInt(req.body.tipo))
        .input('disponibilidad',disponibilidad)
        .input('precio', parseInt(req.body.precio))
        .execute('modificarAlimento')

    console.log(result)
    res.json(result)

};