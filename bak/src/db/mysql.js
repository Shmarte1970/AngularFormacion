const mysql = require("mysql");
const config = require("../config");

// Funcion para los GEST

function todos(tabla) {
  return "Todos";
}

// Funcion para los POTS

function uno(tabla, id) {}

// Funcion para Updates

function agregar(tabla, data) {}

// Funcion para Borrar

function eliminar(tabla, id) {}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
