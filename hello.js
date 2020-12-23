const sayHello = function () {
  console.log("Hello world");
}

sayHello();

// improving the code above

const sayHolle = function(nombre) {
  console.log("Hello, " + nombre)
}

sayHolle("Linda");
sayHolle("Arturo");
sayHolle("Walter");

// ESTE EJERCICIO MUESTRA LA DIF % CONSOLE Y RETURN

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 



// EL DE ABAJO USA RETURN EN VEZ DE CONSOLE 
// NO IMPRIME NADA EN LA TERMINAL
// PERO LO PUEDO INVOCAR DESPUES CON CONSOLE

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('Bicho');
console.log(greeting);

// 


const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));