/**
 * Decipher our caesar cipher strings.
 *
 * @param {string} input - ciphered message, IN LOWER CASE.
 * @param {integer} shift - number of steps to shift the letters.
 * @return {string} output - deciphered message, IN LOWER CASE.
 */
const decipherCaesarCipher = (input, shift) => {
	// ALGORITHM CONSTANTS
    const MIN_CODE = 97; // letter a code
    const MAX_CODE = 122; // letter z code
    const stepAtoZ = 1; // the passing from A to Z consumes one step.
	
    let output = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        // only letters, g flag indicate that regex must be tested against the entire string
        if ( c.match(/[a-z]/gi) ) {
            let code = input.charCodeAt(i);
            if ( (code - shift) < MIN_CODE) {
                let resetShift = MIN_CODE - (code-shift) -stepAtoZ ; // if we start counting from inverse, we must add a stepAtoZ
                output += String.fromCharCode(MAX_CODE - resetShift);
            } else {
                output += String.fromCharCode(code - shift);
            }
        } else {
            output += c;
        }
    }
	
	return output;
}

module.exports = decipherCaesarCipher;