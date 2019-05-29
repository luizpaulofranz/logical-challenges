'use strict';

const fs = require('fs');
const axios = require('axios');
const sha1 = require('js-sha1');
const FormData = require('form-data');

/** Do HTTP request to get the challenge from codenation.  */
const getChallenge = async () => {
    try {
      return await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=0bd39553e11b7144a867283c18abf9c8e37ed5a1')
    } catch (error) {
      console.error(error)
    }
}

/** Do HTTP request to send the challenge solution to codenation.  */
const sendChallenge = async (filePath = __dirname + '/answer.json') => {
    try {
		let formData = new FormData();
		formData.append("answer", fs.createReadStream(filePath), "answer.json");
		const ret = await axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=0bd39553e11b7144a867283c18abf9c8e37ed5a1', formData, {
			headers: formData.getHeaders()
		});
		console.log(ret.data);
		return ret;
    } catch (error) {
		console.error('Error on sending request!');
		console.error(error);
		return false;
    }
}

/**
 * Save our answer file.
 * @param {JSON Object} content.
 */
const saveFile = async (content) => {
    
    await fs.writeFileSync("answer.json", JSON.stringify(content), function(err) {
        if(err) {
            console.log(err);
            return false;
        } else {
            console.log("The file was saved!");
            return true;
        }
    }); 
}

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
    //console.log(input);
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        // only letters
        if ( c.match(/[a-z]/g) ) {
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


const main = async () => {
	// comes from API, and we save it locally on a json file
    const content = await getChallenge();
    await saveFile(content.data);
    
    let answer = JSON.parse(fs.readFileSync('answer.json'));
    //console.log(answer);
	
    let output = decipherCaesarCipher(answer.cifrado.toLowerCase(), answer.numero_casas);
    
	// change our answer obj to update the file with deciphered msg and sha1
    answer.decifrado = output;
    answer.resumo_criptografico = sha1(output);
    await saveFile(answer);
    
	// send axios request
	if(await sendChallenge()) {
		console.log("The End!");
	} else {
		console.log("Error on API Request!");
	}
}

main();
