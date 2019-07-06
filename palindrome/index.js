/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g
E.g palindromeChecker('racecar') // will return true
*/

// using normal for loop, to loop only half string
// BEST APROACH IN PERFORMANCE
function palindromeChecker(text) {
    const lower = text.toLowerCase();
    for(let i = 0; lower.length/2 > i; i++) {
        if (lower[i] !== lower[lower.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// using every() function and more complex logic
// comparing the first letter with last, the second with penultimate and so on...
// PERFORMANCE ISSUE: we just have to loop til reach the middle of string, we are making more comparsions than necessery, lets fix it in another function
function palindromeChecker2(text) {
    const chars = [...text.toLowerCase()]
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
    const result = chars.every( (letter, index) => {
        return letter === chars[chars.length - index - 1]
    } )
    return result
}

// using chain of built-in methods to reverse a string
function palindromeChecker1(text) {
    const rev = text.toLowerCase().split("").reverse().join("");
    return rev === text;
}


module.exports = palindromeChecker
