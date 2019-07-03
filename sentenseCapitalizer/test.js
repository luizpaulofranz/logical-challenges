const sentenceCapitalizer = require('./index')

test('sentenceCapitalizer is a function', () => {
    expect(typeof sentenceCapitalizer).toEqual('function');
});

test('capitalize a lowcase string', () => {
    expect(sentenceCapitalizer("um teste de capitalização.")).toEqual('Um Teste De Capitalização.');
});