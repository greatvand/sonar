const { add, insecureEval, duplicateSum, overlyNested } = require('./calculator');

test('add works', () => {
  expect(add(2, 3)).toBe(5);
});

test('duplicateSum works', () => {
  expect(duplicateSum(1, 2)).toBe(3);
});

test('overlyNested works', () => {
  expect(overlyNested(4)).toBe(true);
});

test('insecureEval runs', () => {
  expect(insecureEval("2 + 3")).toBe(5);
});
