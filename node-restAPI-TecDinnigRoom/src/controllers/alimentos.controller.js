import {getConnection} from '../database/connection'

//OBTENER TODOS LOS ALIMENTOS
export const getAlimentos = async (req,res)=>{
    const pool = await getConnection()
    const result = await pool.request()
        .input('tipoAlimento', '')
        .input('idAlimento', '')
        .execute('readAlimentos')
    console.log(result);
    res.json(result.recordset)
};

//BUSCAR ALIMENTO POR ID
export const getAlimentosID = async (req,res)=>{
    const pool = await getConnection()
    const result = await pool.request()
        .input('tipoAlimento', '')
        .input('idAlimento', req.params.id)
        .execute('readAlimentos')
    console.log(result);
    res.json(result.recordset)
};

//ELIMINAR ALIMENTO
export const eliminarAlimento = async (req,res) =>{
    console.log(req.params)
    const pool = await getConnection()
    const result = await pool.request()
        .input('idAlimento',parseInt(req.params.id))
        .execute('borrarAlimento')
    console.log('borrado'+ req.params.id_alimento);
    res.json(result.recordset)
};

//OBTENER TODOS LOS ALIMENTOS
export const getTipoAlimento = async (req,res)=>{
    const pool = await getConnection()
    const result = await pool.request()
        .execute('readTipoAlimento')
    console.log(result);
    res.json(result.recordset)
};