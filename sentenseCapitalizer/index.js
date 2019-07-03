/* CHALLENGE
Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. 
E.g the tales of scotch! should return: The Tales Of Scotch!
*/

// using map and slice
function sentenceCapitalizer(text) {
    let words = text.toLowerCase().split(' ');
    let capitalized = words.map( word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return capitalized.join(' ');
}

// using two arrays 
function sentenceCapitalizer2(text) {
    let words = text.toLowerCase().split(' ');
    let capitalized = [];

    words.forEach( word => {
        // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
        // in this case, it returns a new string from position one ahead
        capitalized.push(word[0].toUpperCase() + word.slice(1));
    });

    return capitalized.join(' ');
}


// using twice slice calls
function sentenceCapitalizer1(text) {
    text = text.toLowerCase();
    let output = "";
    text.split(" ").forEach( sentence => {
        output += sentence.slice(0, 1).toUpperCase();
        output += sentence.slice(1, sentence.length)+" ";
    } );
    return output.trim();
}


module.exports = sentenceCapitalizer
