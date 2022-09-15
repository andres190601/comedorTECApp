import { Router } from "express";
import passport from "passport";
import { registrarUsuario } from "../controllers/usuarios.controller";
const router = Router()

router.post('/usuario/ingresar', passport.authenticate('local', {
    successRedirect: '/successjson',
    failureRedirect: '/failurejson',
}));

router.get('/successjson', function(req, res) {
    res.send(req.user)
});

router.get('/failurejson', function(req, res) {
    const resultadoJSON = JSON.parse('{"Error":"Error de login"}')
    res.send(resultadoJSON);
});

router.post('/usuario/nuevo',registrarUsuario)

export default router