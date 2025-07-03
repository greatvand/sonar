const calculator = require('./calculator');

test('add works', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtract works', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiply works', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('sum works (duplicate logic)', () => {
  expect(calculator.sum(1, 1)).toBe(2);
});

test('validate works for valid input', () => {
  expect(calculator.validate(30)).toBe(true);
});

test('validate works for invalid input', () => {
  expect(calculator.validate(105)).toBe(false);
});
