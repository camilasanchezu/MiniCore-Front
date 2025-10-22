const { sum, multiply } = require('../services/mathService');

test('should add two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

test('should multiply two numbers correctly', () => {
  expect(multiply(4, 2)).toBe(8);
});
