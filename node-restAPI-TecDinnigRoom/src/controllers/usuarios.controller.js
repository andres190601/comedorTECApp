import { getConnection } from '../database/connection'

export const registrarUsuario = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('email', req.body.correo)
            .input('contrasenia', req.body.contrasenia)
            .input('nombre', req.body.nombre)
            .input('apellido1', req.body.apellido1)
            .input('apellido2', req.body.apellido2)
            .input('carnet', parseInt(req.body.carnet))
            .input('cedula', parseInt(req.body.cedula))
            .input('edad', parseInt(req.body.edad))
            .input('fechaNacimiento', req.body.fechaNacimiento)
            .execute(`CrearUsuarioNuevo`);
        res.send(result)
    } catch (error) {
        res.status(500).json(error);
    }
};

