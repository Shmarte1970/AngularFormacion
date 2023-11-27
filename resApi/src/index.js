const pc = require("picocolors");

const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(
    pc.bgBlack("Servidor escuchando en el puerto:..") +
      pc.bgBlack(app.get("port"))
  );
});
