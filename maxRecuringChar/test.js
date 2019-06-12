const maxRecuringChar = require('./index');

test('vowelsCounter is a function', () => {
 expect( typeof maxRecuringChar).toEqual('function');
});

test('return the maximum of recuring char: a', () => {
    expect(maxRecuringChar('aabacada')).toEqual('a');
});

test('return the maximum of recuring char: o', () => {
    expect(maxRecuringChar('opa tche, tudo certo?')).toEqual('o');
});

test('return the maximum of recuring char: é', () => {
    expect(maxRecuringChar('éélasdéfabnfimjaàdfêjékéjn')).toEqual('é');
});

test('return the maximum of recuring char: 3', () => {
    expect(maxRecuringChar('ééTGas23d3éfab$3nfHi3mKK>j234a#à$df2334êjé4233ké43j5nNM')).toEqual('3');
});