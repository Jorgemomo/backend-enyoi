const express = require("express"); // se llama  al modulo de express
const conexion = require("../../../../config/conexion"); // Importar conexiones
const router = express.Router(); //  creamos el router base

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users"; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
});

module.exports = router;
