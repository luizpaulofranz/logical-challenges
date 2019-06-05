const vowelsCounter = require('./index');

test('vowelsCounter is a function', () => {
 expect( typeof vowelsCounter).toEqual('function');
});

test('return the number of vowels found', () => {
    expect(vowelsCounter('aeiou')).toEqual(5);
});

test('return the number of vowels found in UPPER CASE', () => {
    expect(vowelsCounter('AEIOU')).toEqual(5);
});

test('return the number of vowels found in the intire alphabet', () => {
    expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
    expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});