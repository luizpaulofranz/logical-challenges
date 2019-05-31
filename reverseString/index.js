/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// using chain of built-in methods
function reverseString1(text) {
    return text.split("").reverse().join("");
}

// using chain of built-in methods and ES6 spread operator
function reverseString2(text) {
    return [...text].reverse().join("");
}

// using commom for loop
function reverseString3(text) {
    let ret = "";
    for(let i = text.length -1; i >= 0; i--) {
        ret += text[i];
    }
    return ret;
}

// for ... of aproach
function reverseString4(text) {
    let ret = '';

    //text.split('').forEach(element => {
    //    ret = element + ret
    //});

    // looks like foreach
    for (myChar of text) {
        ret = myChar + ret;
    }

    return ret;
}

// using recursion
function reverseString5(text) {
    if (text === "") {
        return ""
    } else {
        // substr params: start index and size. It can receive negative params to get chars from behind
        return reverseString(text.substr(1)) + text[0]
    }
}

// using JS ES6 reducer
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}

module.exports = reverseString
