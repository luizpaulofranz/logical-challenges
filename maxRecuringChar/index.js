const maxRecuringChar = (text) => {
    let charsCount = {};
    // for ... of to loop through arrays
    for (let char of text) {
        charsCount[char] = (charsCount[char] ? charsCount[char] : 0)+1;
    }
    let biggest = 0;
    let mostRecurrent = '';
    
    for (let char in charsCount) {
        if(charsCount[char] > biggest) {
            biggest = charsCount[char]
            mostRecurrent = char
        }
    }
    return mostRecurrent;

    /*
    // using language resources
    keysArray = Object.keys(charsCount); // returns an array with the property names
    valuesArray = Object.values(charsCount); // returns an array with the property values
    maxCharValue = Math.max(...valuesArray); // find the max value
    return keysArray[valuesArray.indexOf(maxCharValue)]; // as keysArray and valuesArray have the same order, we can compund the index
    */
}

module.exports = maxRecuringChar;