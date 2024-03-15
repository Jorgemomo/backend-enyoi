const conexion = require("../../../../config/conexion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllQuotes = (req, res) => {
  const sql = "SELECT * FROM quote"; // consulta SQL
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
  const sql = `SELECT * FROM quote WHERE id=${id}`; // consulta SQL
  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.createQuote = async (req, res) => {
  const { date, hour, doctor, id_pet } = req.body; // capturamos el parametro id de la ruta

  // const passwordHash = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO quote (date, hour, doctor, id_pet) VALUES ('${date}', '${hour}', '${doctor}', '${id_pet}')`; // consulta SQL

  conexion.query(sql, (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      res.json(rows); // enviamos los resultados en formato JSON
    }
  });
};

exports.updateQuote = (req, res) => {
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

exports.deleteQuote = (req, res) => {
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
  const credentials = { email: email, password: inPassword };

  const sql = `SELECT * FROM users WHERE email = '${email}'`; // consulta SQL
  conexion.query(sql, async (error, rows) => {
    // se realiza consulta  a base de datos
    if (error) {
      res.json(error);
    } else {
      if (rows.length) {
        const { password } = rows[0];
        const passwordIsCorrect = await bcrypt.compare(inPassword, password);
        const token = jwt.sign(credentials, "veterinariaPetsLalala");
        if (passwordIsCorrect) {
          res.json({
            name: rows[0].full_name,
            email: rows[0].email,
            token: token,
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
