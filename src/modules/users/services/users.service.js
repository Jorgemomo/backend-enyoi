const conexion = require("../../../../config/conexion");

const bcrypt = require("bcrypt");

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users"; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
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
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.createUser = async (req, res) => {
  const { full_name, phone, address, email, password, rol } = req.body; // capturamos el parametro id de la ruta

  const passwordHash = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users (full_name, phone, address, email, password, rol) VALUES ('${full_name}', '${phone}', '${address}', '${email}', '${passwordHash}', '${rol}')`; // consulta SQL

  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.updateUser = (req, res) => {
  const { id, full_name, phone, address, email, password, rol } = req.body; // capturamos el parametro id de la ruta
  const sql = `UPDATE users SET full_name = '${full_name}', phone = '${phone}', address = '${address}', email = '${email}', password = '${password}', rol = '${rol}' WHERE id = '${id}' `; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params; // capturamos el parametro id de la ruta
  const sql = `DELETE FROM users WHERE id = '${id}' `; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.authUser = async (req, res) => {
  const { email, password: inPassword } = req.body;

  const sql = `SELECT * FROM users WHERE email = '${email}'`; // consulta SQL
  conexion.query(sql, async (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      if (rows.length) {
        const { password } = rows[0];
        const passwordIsCorrect = await bcrypt.compare(inPassword, password);
        if (passwordIsCorrect) {
          res.json({
            ...rows[0],
            token: "lalala",
          }); // enviamos los resultados en formato JSON
        } else {
          res.json("El password  es incorrecto");
        }
      } else {
        res.json("EL usuario no existe");
      }
    }
  });
};
