let refSemaforo = db.ref("semaforo");

refSemaforo.on("value", function(snapshot) {
  let datos = snapshot.val();
  if (datos) {
    actualizarLuces(datos);
  }
});
