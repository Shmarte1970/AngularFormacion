const app = require("./app");
const pc = require("picocolors");

app.listen(app.get("port"), () => {
  console.log(
    pc.bgBlack("Servidor escuchando en el puerto "),
    pc.bgBlack(app.get("port"))
  );
});
