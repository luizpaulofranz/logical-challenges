function vowelsCounter1(text) {
    
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for(myChar of text.toLowerCase()) {
        if(vowels.includes(myChar)) {
            counter++
        }
    }
    return counter;
}

function vowelsCounter(text) {
    // g flag to return all matches (default returns only the first one)
    // i flag to ignore-case
    // if no match are found returns null
    let counter = (text.match(/[aeiou]/gi) || []).length;
    return counter;
}

module.exports = vowelsCounter;