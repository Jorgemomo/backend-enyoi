const express = require("express"); // se llama  al modulo de express
const conexion = require("./config/conexion"); // Importar conexiones

const app = express(); //se instancia  el servidor con la clase Express
const port = 3000;
app.set("port", port); //setear puerto

app.get("/pets", (req, res) => {
  const sql = "SELECT * FROM pets"; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM pets"; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
});

app.listen(app.get("port"), (error) => {
  // escucha el puerto
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
