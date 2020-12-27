

/*
function ageCalculator(name, cumple ,ano) {

 console.log( name + "is 32 years old.");
 // console.log(ageCalculator("Ferdinand", 1988, 2015));

}

ageCalculator("Suzie ", 1983, 2015)

*/

/*
function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("Suzie", 1983, 2015));

*/

/*
function howManyHundreds(number) {
let hundred = number%9;
  return (number)
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
//console.log(howManyHundreds(99), "=?", 0);
//console.log(howManyHundreds(0), "=?", 0);


howManyHundreds(10);

*/

/*
function howManyHundreds(num) {
  return num % 100 === 0 ? num / 100 : (num - num % 100) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0)

*/

/*

function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0)
    return undefined;
  else return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0)
    return undefined;
  else return base * height * 0.5;
}

function calculateCircleArea(radius) {
  if (radius < 0)
    return undefined;
  else return Math.PI * Math.pow(radius, 2);

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

*/


// FRIDAY 25. EJERCICIO DE ARRAYS CON STEVEN SPIELBERG

/*
const director = 'Steven Spielberg';
const films = ["Jaws", "AI", "Jurassic Park", "8"];

let meGusta = 'Mi pelicula favorita de ' + director + " es " + films.length;  

console.log(meGusta);

*/

/*
const animals = ['perro', 'gato', 'ave'];

const zoo = animals.length

console.log(zoo);

*/

/*
var navidad = [ 'coca', 'sope', 'carne'];
navidad[2] = 'pato';
navidad.push('carne')
console.log(navidad);
*/

/*
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
//donuts.push('cremoso');
donuts.pop();
donuts.pop();
console.log(donuts);
*/


// donuts.push("powdered");

var hola = ["h", "e", "l", "l", "o"];
hola.reverse()
console.log(hola);


hola.sort()
console.log(hola);

var so = ["U", "d", "a", "c", "i", "t", "y"];
so.join("")
console.log(so);

