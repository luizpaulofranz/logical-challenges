const sentenceCapitalizer = require('./index')

test('sentenceCapitalizer is a function.', () => {
    expect(typeof sentenceCapitalizer).toEqual('function');
});

test('capitalize a lowcase string.', () => {
    expect(sentenceCapitalizer("um teste de capitalização.")).toEqual('Um Teste De Capitalização.');
});

test('capitalize a upcase string.', () => {
    expect(sentenceCapitalizer("UM TESTE DE CAPITALIZAÇÃO.")).toEqual('Um Teste De Capitalização.');
});

test('capitalize a capitalized string.', () => {
    expect(sentenceCapitalizer("Um Teste De Capitalização.")).toEqual('Um Teste De Capitalização.');
});

test('capitalize a string with numbers.', () => {
    expect(sentenceCapitalizer("Um 23 Teste de 12 capita7lização 98string string4.")).toEqual('Um 23 Teste De 12 Capita7lização 98string String4.');
});

test('capitalize a ramdom case string.', () => {
    expect(sentenceCapitalizer("um teSte dE capITalizaçãO.")).toEqual('Um Teste De Capitalização.');
});