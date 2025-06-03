// Configuración Firebase
const firebaseConfig = {
    databaseURL: "https://semaforo-rocky-default-rtdb.firebaseio.com/"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  // Referencia al nodo "semaforo"
  const ref = db.ref("semaforo");
  
  // Elementos DOM
  const rojo = document.getElementById("led-rojo");
  const amarillo = document.getElementById("led-amarillo");
  const verde = document.getElementById("led-verde");
  
  // Escuchar cambios en Firebase
  ref.on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;
  
    actualizarLuz(rojo, data.led_rojo);
    actualizarLuz(amarillo, data.led_amarillo);
    actualizarLuz(verde, data.led_verde);
  });
  
  // Función para cambiar clase según valor
  function actualizarLuz(elemento, estado) {
    if (estado === 1) {
      elemento.classList.add("encendido");
    } else {
      elemento.classList.remove("encendido");
    }
  }
  