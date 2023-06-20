//    Esto es para la barra responsive 

const menu = document.querySelector("#navbar");
const menu_btn = document.querySelector("#menu-toggle");
const menu_height = menu.clientHeight;
menu.style.height = 0;

menu_btn.addEventListener("click", function(){
  const menu_position = menu.style.opacity;
  
  if(menu_position != 1){
    menu.style.height = `${menu_height}px`;
    menu.style.opacity = 1;
  }else{
    menu.style.height = 0;
    menu.style.opacity = 0;
  }
});

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

