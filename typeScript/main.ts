let variable: any = "8888";

console.log(variable);

variable = 12;

console.log(variable);

let personas:string[] = ["Barbara","Eva","Estrella"];

let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +
                    personas.map((persona) =>{
                    return `<li>${persona}</li>`;
                    }).join("")
                + "</ul>";