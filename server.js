const app = require("./app");

const port = 3002;
app.set("port", port); //setear el puerto

app.listen(app.get("port"), (error) => {
  // escucha el puerto
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
