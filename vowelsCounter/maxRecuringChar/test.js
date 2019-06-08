const maxRecuringChar = require('./index');

test('vowelsCounter is a function', () => {
 expect( typeof maxRecuringChar).toEqual('function');
});

test('return the maximum of recuring char: a', () => {
    expect(vowelsCounter('aabacada')).toEqual('a');
});

