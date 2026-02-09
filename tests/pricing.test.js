const { calculateFinalAmount } = require('../src/pricing');

test('should return subtotal when no coupon provided', () => {
  expect(calculateFinalAmount(100)).toBe(100);
});

test('applies SAVE10 coupon correctly', () => {
  const result = calculateFinalAmount(200, 'SAVE10');
  expect(result).toBe(180);
});

test('FLAT50 works at boundary', () => {
  const amount = calculateFinalAmount(50, 'FLAT50');
  expect(amount).toBe(0);
});

test('throws error for invalid subtotal', () => {
  expect(() => {
    calculateFinalAmount(-50, 'SAVE10');
  }).toThrow('Invalid subtotal');
});

test('coupon codes are case insensitive', () => {
  const upper = calculateFinalAmount(100, 'SAVE10');
  const lower = calculateFinalAmount(100, 'save10');
  expect(upper).toBe(lower);
});
