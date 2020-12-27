/* var x = 1;
console.log(x + 'bebe');

var x = x + 1;
console.log(x + 'bebe');

var x = x + 1;
console.log(x + "bebe");

var x = x + 1;
console.log(x + 'bebe'); // es el MISMO CODIGO!!!!

*/

// LO UNICO QUE TENGO QUE ALTERAR ES ESTE CODIGO X = X + 1

// TIPOS DE LOOPS

/*
To loop through each element in an array, a for loop should use the array’s .length property in its condition.
*/

/*
const finalPosition = (moves) => {
  return moves.reduce((position, direction) => {
    switch (direction) {
      case 'north':
        position[1]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'west':
        position[0]--;
        break;
      case 'east':
        position[0]++;
        break;
    }

    return position;
  }, [0, 0]);
}

*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) { //calling moves
  let position = [0, 0]; //setting starting coordinates to 0.0
  for (var i = 0; i < moves.length; i++) { //basic loop that iterates +1
    if (moves[i] === 'north') {
      position[1] += 1; //ads 1 to x
    } else if (moves[i] === 'west') {
      position[0] -= 1; //substracts 1 from y
    } else if (moves[i] === 'east') {
      position[0] += 1; // adds 1 to y
    } else if (moves[i] === 'south') {
      position[1] -= 1; // substracts 1 from x
    }
  } return position //return the coordinates
};

console.log(finalPosition(moves));
