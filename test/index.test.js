const sumPrimes = require('../src/js/index.js');

describe('Sum all primes', () => {
    test('should return a type: number', () => {
        expect(typeof sumPrimes(10)).toBe(number);
    });
    test('should return 17', () => {
        expect(sumPrimes(10)).toBe(17);
    });
    test('should return 73156', () => {
        expect(sumPrimes(977)).toBe(73156);
    });
});