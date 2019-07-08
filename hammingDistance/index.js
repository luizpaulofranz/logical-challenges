/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance. 
The hamming distance between two strings of equal length is the number of positions at which these strings vary. 
In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.
E.g 
hammingDistance('rover', 'river') // should return 1
hammingDistance('raven', 'river') // should return 2
*/

// using chain of built-in methods to reverse a string
function hammingDistance(textA, textB) {
    let count = 0;
    if (textA.length === textB.length) {
        for (let i = 0; textA.length > i; i++) {
            /*
            if (textA[i].toLowerCase() != textB[i].toLowerCase()) {
                count++;
            }*/

            if (textA[++i].toLowerCase() != textB[++i].toLowerCase()) {
                count++
            }
        }
        return count;
    }

    throw new Error("Given strings does not have equal length!");
}


module.exports = hammingDistance
