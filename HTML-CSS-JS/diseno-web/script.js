// Inicializar la variable del formulario
const form = document.getElementById("form");

// Escucha al formulario cuando se envía e inicia la funcion
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir recargar la pagina cuando se envia el formulario

  const name = document.getElementById("name").value; // Variable del nombre
  const age = Number(document.getElementById("age").value); // Variable de edad

  // Respuesta al enviar el formulario correctamente
  const respuesta = document.getElementById("respuesta");

  // Validaciones
  if (name.trim() === "" || age < 0 || !Number.isInteger(age)) {
    respuesta.textContent = "Ingresa los datos correctamente";
  } else if (age >= 18) {
    respuesta.textContent = `Hola ${name}, eres mayor de edad, tienes ${age} años`;
  } else {
    respuesta.textContent = `Hola ${name}, eres menor de edad, tienes ${age} años`;
  }
});