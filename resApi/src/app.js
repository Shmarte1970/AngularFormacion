const express = require("express");

const app = express();

const config = require("./config.js");

//const config = {
//app: {
//port: process.env.PORT || 4000,
// },
// };

app.set("port", config.app.port);

module.exports = app;
