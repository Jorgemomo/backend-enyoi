const express = require("express"); // se llama  al modulo de express
const users = require("../src/modules/users/routes/users.router");
const pets = require("../src/modules/pets/routes/pets.router");

const passport = require("passport");
require("../utils/auth/index");

const routers = (app) => {
  const baseRoute = express.Router(); // creamos otro router base
  app.use(express.static("public")); // creamos una ruta pública estática
  app.use("/api/v1", baseRoute); //  agregamos la ruta a nuestra aplicación principal

  baseRoute.use(
    "/users",
    passport.authenticate("jwt", { session: false }),
    users
  ); // prefijo para las rutas que van a estar dentro del recurso "usuarios"

  baseRoute.use("/pets", pets); // prefijo para las rutas que van a estar dentro del recurso "mascotas"
};

module.exports = routers;
