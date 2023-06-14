
//    Esto es para la barra responsive 

document.querySelector("div.menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")});

//   Esto es para el boton que esta en la página principal...

const myButton = document.getElementById('myButton');

if (myButton) {
    myButton.addEventListener('click', function() {
    alert("¡Hola! Has hecho click en el botón.");
});
}

//   Validar formulario de email con varias funciones:

const form = document.getElementById('myForm');

if (form) {
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});
}

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

