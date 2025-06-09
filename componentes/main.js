import { crearZonaDiseno } from "../modulos/ventilador.js";

function cargarDOM() {
  let body = document.body;

  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  h1.textContent = "Raspberry Pico";
  header.appendChild(h1);
  body.appendChild(header);

  let main = document.createElement("main");
  main.className = "container";

  // IZQUIERDA
  let left = document.createElement("section");
  left.className = "left";

  let h2 = document.createElement("h2");
  h2.textContent = "Semáforo";
  left.appendChild(h2);

  // BOTONES
  let botones = document.createElement("div");
  botones.className = "botones";

  let colores = ["rojo", "verde", "amarillo", "negro"];
  for (let i = 0; i < colores.length; i++) {
    let boton = document.createElement("button");
    boton.textContent = colores[i].charAt(0).toUpperCase() + colores[i].slice(1);
    boton.className = colores[i];
    boton.onclick = function() {
      presionarBoton(colores[i]);
    };
    botones.appendChild(boton);
  }
  left.appendChild(botones);

  // SEMÁFORO
  let semaforo = document.createElement("div");
  semaforo.className = "semaforo";

  let ids = ["rojo", "amarillo", "verde"];
  for (let j = 0; j < ids.length; j++) {
    let luz = document.createElement("div");
    luz.id = "led-" + ids[j];
    luz.className = "luz " + ids[j];
    semaforo.appendChild(luz);
  }
  left.appendChild(semaforo);

  // DERECHA - importada desde ventilador.js
  let right = crearZonaDiseno();

  main.appendChild(left);
  main.appendChild(right);
  body.appendChild(main);
}

cargarDOM();
