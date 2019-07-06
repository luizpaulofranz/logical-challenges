const palindromeChecker = require('./index')

test('palindromeChecker is a function', () => {
    expect(typeof palindromeChecker).toEqual('function');
});

test('rececar is a palindrome', () => {
    expect(palindromeChecker('racecar')).toEqual(true);
});

test('vowels are a palindrome', () => {
    expect(palindromeChecker('aeiou')).toEqual(false);
});

test('rEnneR is a palindrome', () => {
    expect(palindromeChecker('rEnneR')).toEqual(true);
});