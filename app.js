const express = require("express"); // se llama  al modulo de express
const routers = require("./router/index"); // importamos los rutas

const app = express(); //se instancia  el servidor con la clase Express
const port = 3000;
app.set("port", port); //setear puerto

app.use(express.json()); //permite que las peticiones json sean interpretadas por express

routers(app); //se instancia las rutas

app.listen(app.get("port"), (error) => {
  // escucha el puerto
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
