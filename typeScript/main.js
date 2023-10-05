var variable = "8888";
console.log(variable);
variable = 12;
console.log(variable);
var personas = ["Barbara", "Eva", "Estrella"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li>".concat(persona, "</li>");
    }).join("")
    + "</ul>";
