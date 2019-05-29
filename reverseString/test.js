const reverseString = require('./index')

test('reverseString is a function', () => {
    expect(typeof reverseString).toEqual('function');
});

test('reverse a string of a given text', () => {
    expect(reverseString('uoiea')).toEqual('aeiou');
});

test('reverse a string of numbers', () => {
    expect(reverseString('9876543210')).toEqual('0123456789');
})

test('reverse a string of mixed characters', () => {
    expect(reverseString('AsD2fGhJkL3')).toEqual('3LkJhGf2DsA')
})