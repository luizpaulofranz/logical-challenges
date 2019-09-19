const str = "We will, we will rock you! 1,2 ,3, LEEETS ROOOCK!";

let matches = str.match(/we/gi);//g = global, to get all ocurrences in an array. i = ignore case
for(let word of matches) {
    //console.log(word); // logs We and we
}

matches = str.match(/\w+/g) // get all the words, o + gets one or more
for(let word of matches) {
    //console.log(word); // logs all the words
}

let reg = /\d/g
matches = str.match(reg) // get all the words
for(let digit of matches) {
    //console.log(digit); // logs all the words
}

reg = /\d/g
//matches = str.match(reg) // get all the words
console.log(reg.test("A String with 1 number.")); // logs all the words