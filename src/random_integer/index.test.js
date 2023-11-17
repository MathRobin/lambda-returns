import randomInteger from './index.js';

describe('randomInteger', () => {
  const cases = [
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(2, 1, 2), 1, 2, 2],
    [randomInteger(200), 100, 511, 200],
    [randomInteger(200, 100), 100, 511, 200],
    [randomInteger(200, 100, 511), 100, 511, 200],
    [randomInteger(200, undefined, 511), 100, 511, 200],
  ];

  test.each(cases)(
    '%s is between %s and %s (both included)',
    (codeExcluded, min, max, codeAsked) => {
      expect(codeExcluded).toBeGreaterThanOrEqual(min);
      expect(codeExcluded).toBeLessThanOrEqual(max);
      expect(codeExcluded).not.toBe(codeAsked);
    }
  );
});
