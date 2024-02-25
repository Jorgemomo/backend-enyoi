const express = require("express"); // se llama  al modulo de express
// Importar conexiones
const { authUser, createUser } = require("../services/users.service");
const router = express.Router(); //  creamos el router base

router.post("/auth", authUser); //ruta autenticación
router.post("/register", createUser); //ruta registro

module.exports = router;
