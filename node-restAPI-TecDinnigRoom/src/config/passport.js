import passport from "passport";
const localStrategy = require("passport-local").Strategy;
import { getConnection } from '../database/connection'

passport.use('local', new localStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (username, password, done) => {
    let IdUsuario = 0;
    let IdTipoUsuario = 0;
    let IdPersona = 0;
    let emailUsuario = '';
    let carritoCompra = [];
    try {

      const pool = await getConnection();
      const result = await pool
        .request()
        .input('email', username)
        .input('password', password)
        .execute(`verifyLogin`);
      if (result.returnValue != 0) {
        if (result.returnValue == 2) {
          return done(null, false, { message: "User not found" });
        }
        else if (result.returnValue == 3) {
          return done(null, false, { message: "The given password and email combination was not found." });
        }
      }
      const loginInfo = result.recordset[0];
      IdUsuario = loginInfo.IdUsuario;
      IdTipoUsuario = loginInfo.IdTipoUsuario;
      IdPersona = loginInfo.IdPersona;
      emailUsuario = username;
    } catch (error) {
      console.log(error);
    }
    let user = { IdTipoUsuario, emailUsuario, IdPersona, carritoCompra };
    return done(null, user, { message: "You are now logged in." });
  }
));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((userId, done) => {
  done(null, userId);
});

