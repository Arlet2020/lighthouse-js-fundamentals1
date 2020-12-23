/*
let countString = 'loopy';
let i = 100;
 
do {
  countString = countString + i;
  i++;
} while (i < 201);
 
console.log(countString);

*/

// Incrementando SOLO UNO
var arlet = 1;
console.log(arlet + "mississippi!");

//var bebe = 42;
//console.log(bebe + " corazon!");

// incrementando + uno

var arlet = arlet + 1;
console.log(arlet + "mississippi!");

var arlet = arlet + 1;
console.log(arlet + "mississippi!");

var arlet = arlet + 1;
console.log(arlet + "mississippi!");


// ES EL MISMO CODIGO.... VAMOS A ITERAR SOBRE VALORES Y CERAR UN BLOQUE DE CODIGO PARA REPETIR

var arlet = 1;
while(arlet <101) {
  console.log(arlet + "mississippi!");
  arlet = arlet + 3;
}

var holy = 5;
while(holy <50) {
  console.log(holy);
  holy = holy + 3
}

/*var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}

var lety = 10;
while( lety <= 28) {
  console.log('Quiero vivir ='+ lety);
  lety = lety + 2;
}
*/

var lupeando = 1;
while(lupeando <=20) {
  console.log(lupeando);
  lupeando = lupeando +1;
}

/*
var x = 1;

/* while (x <= 20) {

  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  }
  else {
    console.log(x);
  }

  x = x + 1
}

*/

/*
var x = 1;

// while loop with a stop condition
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  }
  else {
    console.log(x);
  }
  // increment x at the end of each loop
  x = x + 1;
}

*/

const coro = "Let's dance!";
let buba = 0;
while (buba < 10) {
  console.log(coro + 1);
  buba++;
}
console.log("Alabado!");


const drake = 'Yoo mann';
let rola = 0;
while (rola < 10) {
  if (rola === 5) {
    console.log("Ya choteo!");
  }

  console.log(drake);
  rola++;
}

console.log('You\'re invincible');
/*
let x = 100;
while (x <=201) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if ( x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  console.log(x);
  x = x +2
}

*/
/*
let x = 1;
while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  console.log(x);
  x = x + 1
}
*/

/* 
for (var i = 100; i <= 200; i + 1) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(i);
  } i = i + 1;
}

*/


// EJERCICIOS CON FOR 

/*

for (var i = 10; i <= 30; i = i + 2) {
  console.log(i);
}

for ( var russell = 10; russell <= 20; russell = russell + 1) {
  console.log("Rest bebe rest" + russell);
}

for ( var joda = 5; joda < 10; joda = joda + 1) {
  for ( var luke = 0; luke < 5; luke = luke + 1) {
    console.log( joda + "," + luke);
  }
}

*/

/*
for (var i = 0; i <= 6; i = i + 2) {
  console.log(i);
}
*/
// EJERCICIO DE INCREMENTO USANDO EL OPERADOR ++
/*
for(var jeti = 0; jeti < 5; jeti = jeti + 1) {
  console.log(jeti);
}

//jeti++

var o = 0;
console.log(o);
o++
*/

/* 
const amounts = [61.00, 52.25, 112.99, 5.00]; 
const total = 0;
for (let i = 0; i < amounts.length; i++);{
  total += amounts[i];
}

console.log('Order total is', total);
*/

//const amounts = [61.00, 52.25, 112.99, 5.00]; 
/*

const total = 0;
const amounts = [61.00, 52.25, 112.99, 5.00]; 
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

*/

function sayHello(name) {
  var mensaje = ('Hola ' + name)
  return mensaje;
}

console.log(sayHello('juan'));

// OTRO EJERCICIO

function finddAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = finddAverage(4, 10);

console.log(avg);

// OTRO DE FUNCIONES

function findAverage(x, y) {
  var respuesta = (x + y) / 2;
  return respuesta;
}

var totales = findAverage(5, 9);

console.log(totales);

// otro

