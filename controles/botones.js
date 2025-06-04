let refControl = db.ref("control");

function presionarBoton(color) {
  let datos = {
    boton_rojo: 0,
    boton_verde: 0,
    boton_amarillo: 0,
    boton_negro: 0
  };

  let clave = "boton_" + color;
  datos[clave] = 1;

  refControl.set(datos)
    .then(function() {
      console.log("Botón presionado:", color);
    })
    .catch(function(error) {
      console.log("Error al enviar botón:", error);
    });
}
