import { Router } from "express";
import passport from "passport";
import { registrarUsuario } from "../controllers/usuarios.controller";
const router = Router()

router.post('/usuario/ingresar', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/signin',
}));

router.post('/usuario/nuevo',registrarUsuario)

export default router