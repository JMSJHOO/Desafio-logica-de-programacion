let ingresarDia = prompt('Por favor, ingrese un día de la semana').toLowerCase(); // Convierte a minúsculas
let diasSemanales = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
let diasFinDeSemana = ['sábado', 'domingo'];
let numeroUsuario = prompt('Ingrese un numero positio o negativo');
let numeroGanador = prompt('ingrese una nota');
let salDisponible = 100;
let usuario = prompt('Ingrese su nombre');

if (diasSemanales.includes(ingresarDia)) {
    alert('Buena semana');
} else if (diasFinDeSemana.includes(ingresarDia)) {
    alert('Buen fin de semana');
} else {
    alert('Ingrese un día válido');
}


if (numeroUsuario >= 0){
    alert('Ingresaste un numero positivo');
}else if(numeroUsuario <= 0){
    alert('Ingresaste un numero negativo');
}else{
    alert('Ingresaste 0, ingrese un numero valido');
}

if(numeroGanador >= 100){
    alert('¡Felicidades, has ganado!');
}else if(numeroGanador < 100){
    alert('Intentalo nuevamente para ganar');
}

alert( `Estimado usuario su saldo es: ${salDisponible}`);

alert(`Bienvenido ${usuario}`);