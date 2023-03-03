// Obtener el formulario
var formulario = document.querySelector("form");

// Agregar un listener para el evento submit del formulario
formulario.addEventListener("submit", function(evento) {
  evento.preventDefault(); // Prevenir que el formulario se envíe

  // Obtener los valores de los campos de nombre, correo y contraseña
  var nombre = formulario.elements.nombre.value;
  var correo = formulario.elements.correo.value;
  var contrasena = formulario.elements.contrasena.value;

  // Validar que los campos no estén vacíos
  if (nombre === "" || correo === "" || contrasena === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar que la contraseña tenga al menos 8 caracteres
  if (contrasena.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }})