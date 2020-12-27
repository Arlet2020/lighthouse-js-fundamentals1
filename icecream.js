/*
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer")
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours.pop());
//console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);
*/



/* var iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length-1]);
console.log(iceCreamFlavours.length);

*/

/*
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
donuts[0] += ' hole'
console.log(donuts);

donuts[2] += ' hole'
console.log(donuts);

*/

/*
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for(i = 0; i < donuts.length; i++) {
  donuts[i] += ' hole';
  donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts);

*/

words = ["cat", "in", "hat"];
words.forEach(function (word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});