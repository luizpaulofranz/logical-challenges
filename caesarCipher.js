'use strict';

const fs = require('fs');
const axios = require('axios');

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
    console.log(answer);
    

}

main();
