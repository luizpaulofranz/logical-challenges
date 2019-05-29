/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// using chain of built-in methods
function reverseString1(text) {
    return text.split("").reverse().join("");
}

// using chain of built-in methods and ES6 spread operator
function reverseString(text) {
    return [...text].reverse().join("");
}


module.exports = reverseString
