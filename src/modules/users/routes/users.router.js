const express = require("express"); // se llama  al modulo de express
// Importar conexiones
const {
  getAllUsers,
  getById,
  createUser,
} = require("../services/users.service");
const router = express.Router(); //  creamos el router base

router.get("/", getAllUsers);
router.get("/byId/:id", getById);
router.post("/create", createUser);

module.exports = router;
