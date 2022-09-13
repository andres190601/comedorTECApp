import express from "express";
import config from "./config";
import passport from "passport";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";

//importar rutas
import alimentosRoutes from './routes/alimentos.routes'
import usuariosRoutes from './routes/usuarios.routes'

const app = express()
import('./config/passport');

//settings
app.set('port', config.port || 3000)

//Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(alimentosRoutes);
app.use(usuariosRoutes);
export default app