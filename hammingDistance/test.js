const hammingDistance = require('./index')

test('hammingDistance is a function', () => {
    expect(typeof hammingDistance).toEqual('function');
});

test('hammingDistance of river', () => {
    expect(hammingDistance('river', 'rover')).toEqual(1);
});
