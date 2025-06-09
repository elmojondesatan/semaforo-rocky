export function crearZonaDiseno() {
    const right = document.createElement("section");
    right.className = "right";
  
    const titulo = document.createElement("h2");
    titulo.textContent = "Medidor de Temperatura y Humedad";
  
    // Ventilador visual
    const ventiladorContainer = document.createElement("div");
    ventiladorContainer.className = "ventilador-container";
  
    const fan = document.createElement("div");
    fan.className = "fan";
  
    for (let i = 0; i < 4; i++) {
      const blade = document.createElement("div");
      blade.className = "blade";
      blade.style.transform = `translate(-50%, -100%) rotate(${i * 90}deg)`;
      fan.appendChild(blade);
    }
  
    ventiladorContainer.appendChild(fan);
  
    // Datos
    const datos = document.createElement("div");
    datos.className = "datos";
  
    const tempTitulo = document.createElement("h3");
    tempTitulo.textContent = "Temperatura";
    const tempValor = document.createElement("p");
    tempValor.id = "valor-temperatura";
    tempValor.textContent = "Cargando...";
  
    const humTitulo = document.createElement("h3");
    humTitulo.textContent = "Humedad";
    const humValor = document.createElement("p");
    humValor.id = "valor-humedad";
    humValor.textContent = "Cargando...";
  
    datos.appendChild(tempTitulo);
    datos.appendChild(tempValor);
    datos.appendChild(humTitulo);
    datos.appendChild(humValor);
  
    right.appendChild(titulo);
    right.appendChild(ventiladorContainer);
    right.appendChild(datos);
  
    // Firebase realtime listeners
    setTimeout(() => {
      const db = firebase.database();
  
      db.ref("temp").on("value", (snapshot) => {
        const temp = snapshot.val();
        tempValor.textContent = `${temp} °C`;
  
        if (parseFloat(temp) >= 30) {
          fan.style.animation = "spin 1s linear infinite";
        } else {
          fan.style.animation = "none";
        }
      });
  
      db.ref("hum").on("value", (snapshot) => {
        const hum = snapshot.val();
        humValor.textContent = `${hum} %`;
      });
    }, 100);
  
    return right;
  }
  
  crearZonaDiseno();