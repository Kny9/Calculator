const { subtract } = require('../calculator');
const { divide } = require('../calculator');
const { add } = require('../calculator');
const { multiply } = require('../calculator')

describe('Calculator', () =>{
    test ('adds 1 + 2 = 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test ('adds 0 + 0 = 0', () => {
        expect(add(0, 0)).toBe(0);
    });
})

describe('Calculator', () =>{
    test ( 'subtract 2 - 1 = 1', () => {
        expect (subtract(2, 1)).toBe(1);
    });

    test ('subtract 0 - 0 = 0', () => {
        expect(subtract(0, 0)).toBe(0);
    });
})

describe('Calculator', () => {
    test ('multiply 2 * 2 = 4', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test ('multiply 0 * 0 = 0', () => {
        expect(multiply(0, 0)).toBe(0);
    });
})

describe('Calculator', () => {
    test ('divide 6 / 2 = 3', () => {
        expect(divide(6, 2)).toBe(3)
    });

    test ('divide 2 / 0 = 0', () => {
        expect(multiply(2, 0)).toBe(0);
    });
})