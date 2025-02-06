
let bienvenido= "Welcome to all of you";
let nombre = 'Jhon Lemaine';
let lenguaje = prompt('¿Cual es  lenguaje de programacion que mas te guste?');
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
let resultado = valor1 - valor2;
let edad = prompt('Ingrese su edad');
let numero = parseFloat(prompt('Ingrese un numero'));
let mostrarNumeros = 1;
let nota = 7;
let numeroAleatorio = Math.random();
let numeroAleatorio2 = parseInt(Math.floor(Math.random()*10));
let numeroAleatorio3 = parseInt(Math.floor(Math.random()*1000));


console.log(bienvenido);

console.log(`Hola ${nombre}`);

alert('Hola ' +nombre);

console.log(lenguaje);

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
console.log(`La diferencian entre ${valor1} y ${valor2} es igual a ${resultado}`);

if(edad <= 17){
    console.log('Eres menor de edad, pide ayuda a sus padres');
}else if(edad <=65){
    console.log('Eres mayor de edad');
}else{
    console.log('Eres un anciano');
}

if (numero >0){
    console.log(`Ingresaste un numero positivo, el numero es: ${numero}`);
}else if(numero <0){
    console.log(`Ingresaste un numero negativo, el numero es: ${numero}`);
}else{
    console.log('ingresaste 0 o un string');
}


while(mostrarNumeros <=10){
    console.log(mostrarNumeros);
    mostrarNumeros++;
}

if(nota >= 7){
    console.log('Aprobado');
}else if(nota <7){
    console.log('Reprobado');
}

console.log(numeroAleatorio);
console.log(numeroAleatorio2);
console.log(numeroAleatorio3);