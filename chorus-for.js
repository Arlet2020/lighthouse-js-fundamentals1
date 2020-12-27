/*
const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
   console.log(chorus);
}

console.log('Until the sun comes up!');

*/

/*
const stations = [
   ['Big Bear Donair', 10, 'restaurant'],
   ['Bright Lights Elementary', 50, 'school'],
   ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
   const goodStations = []
   for (const station of stations) { 
      const capacity = station[1]
      if (capacity >= 20) {
        
         const type = station[2];
         if (type === "school" || type === "community centre") { 
            goodStations.push(station[0])
         }  
      }
   }
   return goodStations
}

console.log(chooseStations(stations))

*/ 

// EJERCICIO DE MOVES

/*

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = 


const finalPosition = function (moves) {
   const goodCoord = [0,0]
    for ( let i = 0; i < moves.length; i++) {
      if (moves[i] === "north") {
         goodCoord[1] += 1
      }

}

//console.log(finalPosition(moves))
*/

/*
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) { //calling moves
   let position = [0, 0]; //setting starting coordinates to 0.0
   for (var i = 0; i < moves.length; i++) { //basic loop that iterates +1
      if (moves[i] === 'north') {
         position[1] += 1; //ads 1 to x
      } else if (moves[i] === 'west') {
         position[0] -= 1; //substracts 1 from y
      }

      //continue with if loops for 'east' and 'south'
   } return position //return the coordinates
};

console.log(finalPosition(moves))

*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) { //calling moves
   let position = [0, 0]; //setting starting coordinates to 0.0
   for (var i = 0; i < moves.length; i++) { //basic loop that iterates +1
      if (moves[i] === 'north') {
         position[1] += 1; //ads 1 to x
      } else if (moves[i] === 'west') {
      position[0] -= 1; //substracts 1 from y
         } else if (moves[0] === 'east') {
            position[1] +=1;
            } else if (moves[0] === 'east') {
               position[0] -=1;
            }  else if (moves[1] === 'south') {
               position[1] -=0;
            }

      //continue with if loops for 'east' and 'south'
   } return position //return the coordinates
};

console.log(finalPosition(moves))



