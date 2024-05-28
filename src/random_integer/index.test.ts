import { describe, expect, test } from 'vitest';
import { codes } from '@/codes';

import randomInteger, { maxHttpCode, minHttpCode } from './index.js';

describe('randomInteger', () => {
  const cases = codes.map(([, codenumber]) => [codenumber]);

  test.each(cases)('%s is not generated when asked', (code) => {
    const generatedCode = randomInteger(code);

    expect(generatedCode).toBeGreaterThanOrEqual(minHttpCode);
    expect(generatedCode).toBeLessThanOrEqual(maxHttpCode);
    expect(generatedCode).not.toBe(code);
  });
});
