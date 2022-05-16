describe('lambda-returns', () => {
  let module;

  beforeEach(() => {
    module = require('./index');
  });

  test('length check', () => {
    expect(Object.keys(module).length).toBe(55);
  });

  describe('some methods', () => {
    test('ok', () => {
      expect(module.ok({ status: 'success' })).toEqual({
        statusCode: 200,
        headers: {},
        body: JSON.stringify({ status: 'success' }),
      });
    });

    test('ok with headers', () => {
      expect(module.ok({ status: 'success' }, { Content: 'json' })).toEqual({
        statusCode: 200,
        headers: {
          Content: 'json',
        },
        body: JSON.stringify({ status: 'success' }),
      });
    });

    test('noContent', () => {
      expect(module.noContent()).toEqual({
        statusCode: 204,
        headers: {},
        body: null,
      });
    });

    test('badRequest', () => {
      expect(
        module.badRequest({ error: 'argument foo was not provided' })
      ).toEqual({
        statusCode: 400,
        headers: {},
        body: JSON.stringify({ error: 'argument foo was not provided' }),
      });
    });
  });
});
