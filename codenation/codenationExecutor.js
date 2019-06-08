'use strict';

const fs = require('fs');
const axios = require('axios');
const sha1 = require('js-sha1');
const FormData = require('form-data');

const decipherCaesarCipher = require('./decipherCaesarCipher');

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
 * Call all the steps needed by codenation.
 * 1 - get requesto on API
 * 2 - save the answer as a JSON file
 * 3 - decipher the chalenge string with our function =D
 * 4 - update the JSON file with the deciphered string
 * 5 - finally, sends our json file to ger corrected in codenation API
 */
const main = async () => {
	// comes from API, and we save it locally on a json file
    const content = await getChallenge();
    await saveFile(content.data);
    
    let answer = JSON.parse(fs.readFileSync('answer.json'));
    //console.log(answer);
	
    let output = decipherCaesarCipher(answer.cifrado, answer.numero_casas);
    
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
