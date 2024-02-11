const conexion = require("../../../../config/conexion");

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users"; // consulta SQL
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
  const sql = `SELECT * FROM users WHERE id=${id}`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.createUser = (req, res) => {
  const { full_name, phone, address, email, password, rol } = req.body; // capturamos el parametro id de la ruta
  const sql = `INSERT INTO users (full_name, phone, address, email, password, rol) VALUES ('${full_name}', '${phone}', '${address}', '${email}', '${password}', '${rol}')`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};
