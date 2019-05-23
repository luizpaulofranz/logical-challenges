'use strict';

const fs = require('fs');
const axios = require('axios');
const sha1 = require('js-sha1');
const FormData = require('form-data');

/** Do HTTP request to get the challenge  */
const getChallenge = async () => {
    try {
      return await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=0bd39553e11b7144a867283c18abf9c8e37ed5a1')
    } catch (error) {
      console.error(error)
    }
}

/**
 * Save our answer file.
 * @param {JSON} content 
 */
const saveFile = async (content) => {
    
    fs.writeFileSync("answer.json", JSON.stringify(content), function(err) {
        if(err) {
            console.log(err);
            return false;
        } else {
            console.log("The file was saved!");
            return true;
        }
    }); 
}

const main = async () => {
    const content = await getChallenge();
    await saveFile(content.data);
    
    // up to now, we work with our file and on cipher
    let answer = JSON.parse(fs.readFileSync('answer.json'));
    //console.log(answer);

    // deciphering
    const MIN_CODE = 97; // a code
    const MAX_CODE = 122; // z code
    const stepAtoZ = 1; // the passing from A to Z consumes one step.
    const input = answer.cifrado.toLowerCase();
    const shift = answer.numero_casas;
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
    
    answer.decifrado = output;
    answer.resumo_criptografico = sha1(output);
    await saveFile(JSON.stringify(answer));
    
	let formData = new FormData();
	// const answerFile = fs.readFileSync('answer.json');
	const answerFile = fs.createReadStream('answer.json')
	formData.append("answer", answerFile);
	axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=0bd39553e11b7144a867283c18abf9c8e37ed5a1', formData, {
		headers: {
		  'Content-Type': 'multipart/form-data'
		}
	})
	.then( ret => {console.log(ret)} )
	.catch(err => {console.log(err)});
	
    console.log("Fim!");
    

}

main();
