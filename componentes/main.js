function cargarDOM() {
  let body = document.body;

  // HEADER
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  h1.textContent = "Raspberry Pico";
  header.appendChild(h1);
  body.appendChild(header);

  // MAIN
  let main = document.createElement("main");
  main.className = "container";

  // SECCIÓN IZQUIERDA
  let left = document.createElement("section");
  left.className = "left";

  let h2 = document.createElement("h2");
  h2.textContent = "Semáforo";
  left.appendChild(h2);

  let botones = document.createElement("div");
  botones.className = "botones";

  let colores = ["rojo", "verde", "amarillo", "negro"];
  colores.forEach(color => {
    let boton = document.createElement("button");
    boton.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    boton.className = color;
    boton.onclick = () => presionarBoton(color);
    botones.appendChild(boton);
  });
  left.appendChild(botones);

  let semaforo = document.createElement("div");
  semaforo.className = "semaforo";

  ["rojo", "amarillo", "verde"].forEach(color => {
    let luz = document.createElement("div");
    luz.id = "led-" + color;
    luz.className = "luz " + color;
    semaforo.appendChild(luz);
  });

  left.appendChild(semaforo);

  // SECCIÓN DERECHA
  let right = document.createElement("section");
  right.className = "right";

  let titulo = document.createElement("h2");
  titulo.textContent = "Zona de diseño";
  right.appendChild(titulo);

  // CONTENEDOR DEL VENTILADOR CON GIF
  let ventiladorContainer = document.createElement("div");
  ventiladorContainer.className = "ventilador-container";

  let gif = document.createElement("img");
  gif.src = "https://i.gifer.com/RBuC.gif"; // Cambia esta URL si deseas otro ventilador
  gif.alt = "Ventilador animado";
  gif.style.width = "150px";
  gif.style.height = "150px";
  gif.style.display = "block";
  gif.style.margin = "0 auto";
  ventiladorContainer.appendChild(gif);

  // DATOS
  let datos = document.createElement("div");
  datos.className = "datos";

  let temp = document.createElement("h3");
  temp.id = "temperatura";
  temp.textContent = "Temperatura: 25°C";

  let humedad = document.createElement("h3");
  humedad.id = "humedad";
  humedad.textContent = "Humedad: 50%";

  let btnActualizar = document.createElement("button");
  btnActualizar.textContent = "Actualizar Datos";
  btnActualizar.onclick = actualizarDatos;

  datos.appendChild(temp);
  datos.appendChild(humedad);
  datos.appendChild(btnActualizar);
  ventiladorContainer.appendChild(datos);

  right.appendChild(ventiladorContainer);

  main.appendChild(left);
  main.appendChild(right);
  body.appendChild(main);
}

function presionarBoton(color) {
  ["rojo", "amarillo", "verde"].forEach(c => {
    let luz = document.getElementById("led-" + c);
    if (luz) luz.classList.remove("encendido");
  });
  if (color !== "negro") {
    let luz = document.getElementById("led-" + color);
    if (luz) luz.classList.add("encendido");
  }
}

function actualizarDatos() {
  let nuevaTemp = Math.floor(Math.random() * 16) + 20; // 20°C a 35°C
  let nuevaHumedad = Math.floor(Math.random() * 51) + 30; // 30% a 80%

  document.getElementById("temperatura").textContent = "Temperatura: " + nuevaTemp + "°C";
  document.getElementById("humedad").textContent = "Humedad: " + nuevaHumedad + "%";
}

cargarDOM();
