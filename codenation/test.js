const decipherCaesarCipher = require('./decipherCaesarCipher');

test('decipherCaesarCipher is a function', () => {
 expect( typeof decipherCaesarCipher).toEqual('function');
});

test('return deciphered string with shift 5', () => {
    expect(decipherCaesarCipher('fjntz',5)).toEqual('aeiou');
});

test('return deciphered string with shift 3', () => {
    expect(decipherCaesarCipher('Whvwh gh vwulqj, roá, vrx xpd vwulqj gh whvwhv! É lvvr dl phvpr!',3)).toEqual('teste de string, olá, sou uma string de testes! é isso ai mesmo!');
});

test('return deciphered string with shift 8', () => {
    expect(decipherCaesarCipher('Bmabm lm abzqvo, wtá, awc cui abzqvo lm bmabma! É qaaw iq umauw!',8)).toEqual('teste de string, olá, sou uma string de testes! é isso ai mesmo!');
});