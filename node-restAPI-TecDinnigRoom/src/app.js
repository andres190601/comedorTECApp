import express from "express";
import config from "./config";
import passport from "passport";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";

//importar rutas
import alimentosRoutes from './routes/alimentos.routes'
import usuariosRoutes from './routes/usuarios.routes'
import clientesRoutes from './routes/clientes.routes'
import pedidosRoutes from './routes/pedidos.routes'
import comprasRoutes from './routes/compras.routes'

const app = express()
import('./config/passport');

//settings
app.set('port', config.port || 3000)

//Middlewares
app.use(cors({
    credentials:true
  }))
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
app.use(clientesRoutes);
app.use(usuariosRoutes);
app.use(pedidosRoutes);
app.use(comprasRoutes)


export default app