

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const goodStations = [] // ultimo paso
  // 10.3 y ULTIMO PARA PONER TODO EN UNA LISTA CREO UNA VARIABLE 
//1 tengo que crear un for loop statement para ir por cada objeto enla lista
  for (const station of stations) { // 2 for cada estacion de todas las estaciones en la lista
// 3 para ver que estoy agarrando lo que quiero uso console.log
    const capacity = station[1]// 6. este paso sigio despues del 5. pero se ubica arriba de console
 // console.log(station); // me imprime todas las estaciones en la lista
  //console.log("hola"); //  3.1 ejemplo de lo puedo imprimir extra... o sea es un loop que va en cada estacion en la lista
  // 4 quiero agarrar la capacidad para hacer una decision con esos data, como agarro solo la capacidad data? uso INDEX
  // 5 para jalar la capacidad tengo que crear una variable para entrar y storage mi data capacity
  //7 PARA VER LO QUE HICIMOS EN PASO 6 USO CONSOLE
  // console.log(capacity);// <-- 8.1 desactivo este paso... ya vi que si seleccione la cpac correctamente.
  // 8 HAY QUE TOMAR 1 DECISION SOBRE LA CAPACIDAD, AQUI USAMOS IN IF STATEM. > PARA COMPARAR Y TOMAR DECISION
  if (capacity >= 20) {
    //console.log(station[0]); //  9. que index uso ara print the station name
    // 10.  escuela, comminity o restauramt? para saber y elegir  uso un if statement y creo una const para storage ese dato
    const type = station[2];  // 10.2 es lo que hice en paso 9
    if (type === "school" || type === "community centre" ) { // 10.3 hago la comparativa de type
      goodStations.push(station[0]) // aqui habia un console.log(station[o]) en vez de push
    }  //10.1 creo el if y me paso a crear una var. o const
    // 11. 5ULTIMO PASO DEFINITIVO PARA IMPRIMIR LOS DATOS EN UN ARRAY y cuando hadga node en este paso (hazlo arlet) no se va a imprimir pero  es pq ya no estoy consologging dentro de mi funcion, esta afuera (below) 
    // 12 tengo que push el valor fuera de la funcion , que uso? RETURN STTEMENT
    
   }
  }
  return goodStations //que variable esta storaging el valor de las buenas estaciones?
}

console.log(chooseStations(stations))