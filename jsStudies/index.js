/** ################### DATA DEFINITIONS ################### */
const arrStr = ['item1', 'item2', 'item3', 'item4', 'item5'];
const arrInt = [12, 5, 130, 8, 44];
const pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
];


/** ################### MAP ################### */
/* Iterates through all array items, returns a new array with transformations done on each element */
const map = arrStr.map( item => item+' hue' );
console.log("MAP Example.");
console.log(map); // all elements concatenated with "hue"


/** ################### REDUCE ################### */
/* Iterates through all items, returns a single value, reduced by our callback onto a single result */
// accumulator is the result reduced data, pilot is the arg
// last parameter os the initial data to acc
const reduce = pilots.reduce( (accumulator, pilot) => {
    return accumulator + pilot.years;
}, 0)

console.log("REDUCE Example.");
console.log(reduce);// sum all year props

/** ################### FIND ################### */
/* returns one single result which fits the condition pased on callback */
const find = arrInt.find( element => element < 10 );
console.log("FIND Example.");
console.log(find); // should be 5

/** ################### FILTER ################### */
/* returns all elementos which fits the condition pased on callback in a new array */
const filter = arrInt.filter( element => element < 10 );
console.log("FILTER Example.");
console.log(filter); // should be [ 5, 8 ]
