const express = require("express"); // se llama  al modulo de express
const routers = require("./router/index"); // importamos los rutas

const app = express(); //se instancia  el servidor con la clase Express

app.use(express.json()); //permite que las peticiones json sean interpretadas por express

routers(app); //se instancia las rutas

module.exports = app;
