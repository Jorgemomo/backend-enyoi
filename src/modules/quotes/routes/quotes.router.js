const express = require("express"); // se llama  al modulo de express
// Importar conexiones
const {
  getAllUsers,
  getById,
  createUser,
  updateUser,
  deleteUser,
  authUser,
} = require("../services/quotes.service");
const router = express.Router(); //  creamos el router base

router.get("/", getAllUsers);
router.get("/byId/:id", getById);
router.post("/create", createUser);
router.put("/update", updateUser);
router.delete("/delete/:id", deleteUser);

router.post("/auth", authUser); //ruta autenticación

module.exports = router;
