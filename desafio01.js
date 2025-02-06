let alerta = "¡Bienvenida y Bienvenido a nuestro sitio WEB!"
let nombre= "Lua";
let edad = "25";
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let alertaError ="¡Error! Completa todos los campos";
let mensajeDeError = alertaError;
nombre = prompt('Porfavor, Ingrese su nombre!');
edad = parseInt(prompt('Ingrese su edad'));


swal(alerta);//es un alert con mas estilo
alert(alerta);
alert(alertaError);
swal(alertaError);//es un alert con mas estilo
alert(mensajeDeError);
swal(mensajeDeError);

if(edad >=18){
    alert(nombre +' Puedes tener tu licencia de conducir!');
}else{
    alert(nombre +' Eres menor de edad! pide pide ayuda.');
}