const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("Servidor listening on port", app.get("port"));
});
