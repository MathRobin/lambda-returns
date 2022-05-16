import { ok, noContent, badRequest } from './index.esm.js';

describe('lambda-returns', () => {
  describe('some methods', () => {
    test('ok', () => {
      expect(ok({ status: 'success' })).toEqual({
        statusCode: 200,
        headers: {},
        body: JSON.stringify({ status: 'success' }),
      });
    });

    test('ok with headers', () => {
      expect(ok({ status: 'success' }, { Content: 'json' })).toEqual({
        statusCode: 200,
        headers: {
          Content: 'json',
        },
        body: JSON.stringify({ status: 'success' }),
      });
    });

    test('noContent', () => {
      expect(noContent()).toEqual({
        statusCode: 204,
        headers: {},
        body: null,
      });
    });

    test('badRequest', () => {
      expect(badRequest({ error: 'argument foo was not provided' })).toEqual({
        statusCode: 400,
        headers: {},
        body: JSON.stringify({ error: 'argument foo was not provided' }),
      });
    });
  });
});
