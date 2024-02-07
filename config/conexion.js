const mysql = require("mysql"); //Se solicita bd
const conexion = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "veterinaria_pets",
}); // Se instalacia la bd, cpn el host o url  donde se encuentra la bd, usuario, contraseña, y base de datos para acceder a ella

conexion.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
}); // Detecta si se puede conectar correctamente o si se presenta un error

module.exports = conexion; // exportar la  variable para ser utilizada en otros archivos
