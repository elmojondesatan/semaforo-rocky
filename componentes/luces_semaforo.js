function actualizarLuces(estado) {
    let luces = [
      { id: "led-rojo", estado: estado.led_rojo },
      { id: "led-amarillo", estado: estado.led_amarillo },
      { id: "led-verde", estado: estado.led_verde }
    ];
  
    for (let i = 0; i < luces.length; i++) {
      let elem = document.getElementById(luces[i].id);
      if (luces[i].estado === 1) {
        elem.classList.add("encendido");
      } else {
        elem.classList.remove("encendido");
      }
    }
  }
  