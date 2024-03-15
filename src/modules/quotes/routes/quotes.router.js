const express = require("express"); // se llama  al modulo de express
// Importar conexiones
const {
  getAllQuotes,
  getById,
  createQuote,
  updateQuote,
  deleteQuote,
  authUser,
} = require("../services/quotes.service");
const router = express.Router(); //  creamos el router base

router.get("/", getAllQuotes);
router.get("/byId/:id", getById);
router.post("/create", createQuote);
router.put("/update", updateQuote);
router.delete("/delete/:id", deleteQuote);

router.post("/auth", authUser); //ruta autenticación

module.exports = router;
