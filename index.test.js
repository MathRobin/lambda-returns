describe('lambda-returns', () => {
  let module;

  beforeEach(() => {
    module = require('./index');
  });

  test('length check', () => {
    expect(Object.keys(module).length).toBe(56);
  });

  describe('some methods', () => {
    test('ok', () => {
      expect(module.ok({ status: 'success' })).toEqual({
        statusCode: 200,
        body: JSON.stringify({ status: 'success' }),
      });
    });

    test('noContent', () => {
      expect(module.noContent()).toEqual({
        statusCode: 204,
        body: null,
      });
    });

    test('badRequest', () => {
      expect(
        module.badRequest({ error: 'argument foo was not provided' })
      ).toEqual({
        statusCode: 400,
        body: JSON.stringify({ error: 'argument foo was not provided' }),
      });
    });
  });
});
