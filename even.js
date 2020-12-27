/*

const isEven = function (num) {
  return num % 2 === 0;
}
 const bueno = isEven(21);
 console.log(bueno);

 */

// MAS EJERCICIOS CON RETURN STATEMENT Y EVALUANDO EXPRESSIONES PARA FALSE O VERDADERO

/*

const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

*/

// TMB PUEDO SIMPLICAR EL CODIGO...

/*

const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

*/

function lastIndexOf(array, value) {
  for (var i = array.length; i > 0; i--) {
    if (array[i - 1] === value)
      return i - 1;
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
