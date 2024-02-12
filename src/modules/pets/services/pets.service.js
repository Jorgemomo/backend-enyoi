const conexion = require("../../../../config/conexion");

exports.getAllPets = (req, res) => {
  const sql = "SELECT * FROM pets"; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.getById = (req, res) => {
  const { id } = req.params; // capturamos el parametro id de la ruta
  const sql = `SELECT * FROM pets WHERE id=${id}`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.createPet = (req, res) => {
  const { name, type, race, age, weight, id_user } = req.body; // capturamos el parametro id de la ruta
  const sql = `INSERT INTO pets (name, type, race, age, weight, id_user) VALUES ('${name}', '${type}', '${race}', '${age}', '${weight}', '${id_user}')`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows, "registro exitoso"); // enviamos los resultados en formato JSON
    }
  });
};

exports.updatePet = (req, res) => {
  const { id, name, type, race, age, weight, id_user } = req.body; // capturamos el parametro id de la ruta
  const sql = `UPDATE pets SET name = '${name}', type = '${type}', race = '${race}', age = '${age}', weight = '${weight}', id_user = '${id_user}' WHERE id = '${id}'`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.deletePet = (req, res) => {
  const { id } = req.params; // capturamos el parametro id de la ruta
  const sql = `DELETE FROM pets WHERE id = '${id}'`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};
