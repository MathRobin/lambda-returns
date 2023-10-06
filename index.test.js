import * as lambdaReturns from './index.js';
import codes from './codes.js';
import capitalizeFirstLetter from './src/capitalize_first/index.js';
import randomInteger from './src/random_integer/index.js';

describe('lambda-returns', () => {
  const codesEntries = Object.entries(codes);

  describe('basic methods', () => {
    // can't test continue status word because it's forbidden to export it in JS
    // look at README
    const cases = codesEntries
      .filter(([status]) => status !== 'continue')
      .map(([status, code]) => [status, code]);

    test.each(cases)('%s should return %s when empty args', (status, code) => {
      expect(lambdaReturns[status]()).toEqual({
        statusCode: code,
        headers: {},
        body: null,
      });
    });

    test.each(cases)(
      '%s should return %s when empty body but headers filled',
      (status, code) => {
        expect(
          lambdaReturns[status](undefined, { ContentType: 'application/json' })
        ).toEqual({
          statusCode: code,
          headers: { ContentType: 'application/json' },
          body: null,
        });
      }
    );

    test.each(cases)(
      '%s should return %s when has obect body, no headers',
      (status, code) => {
        expect(lambdaReturns[status]({ status: 'success' })).toEqual({
          statusCode: code,
          headers: {},
          body: '{"status":"success"}',
        });
      }
    );

    test.each(cases)(
      '%s should return %s when has string body, no headers',
      (status, code) => {
        expect(lambdaReturns[status]('{"everything":"is good"}')).toEqual({
          statusCode: code,
          headers: {},
          body: '{"everything":"is good"}',
        });
      }
    );

    test.each(cases)(
      '%s should return %s when has obect body, with headers',
      (status, code) => {
        expect(
          lambdaReturns[status](
            { status: 'success' },
            {
              'Accept-Encoding': 'gzip, deflate, br',
            }
          )
        ).toEqual({
          statusCode: code,
          headers: {
            'Accept-Encoding': 'gzip, deflate, br',
          },
          body: '{"status":"success"}',
        });
      }
    );

    test.each(cases)(
      '%s should return %s when has string body, with headers',
      (status, code) => {
        expect(
          lambdaReturns[status]('{"everything":"is good"}', {
            'Cache-Control': 'no-cache',
          })
        ).toEqual({
          statusCode: code,
          headers: {
            'Cache-Control': 'no-cache',
          },
          body: '{"everything":"is good"}',
        });
      }
    );
  });

  describe('test helper methods', () => {
    const cases = codesEntries.map(([status, code]) => [
      `is${capitalizeFirstLetter(status)}`,
      code,
    ]);

    test.each(cases)(
      '%s should return %s when empty body, empty headers',
      (statusTest, code) => {
        expect(
          lambdaReturns[statusTest]({
            statusCode: code,
            headers: {},
            body: null,
          })
        ).toBe(true);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: null,
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: null,
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: null,
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: null,
          })
        ).toBe(false);
      }
    );

    test.each(cases)(
      '%s should return %s when has body',
      (statusTest, code) => {
        expect(
          lambdaReturns[statusTest]({
            statusCode: code,
            headers: {},
            body: '{"status":"success"}',
          })
        ).toBe(true);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: '{"status":"success"}',
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: '{"status":"success"}',
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: {},
            body: '{"status":"success"}',
          })
        ).toBe(false);
      }
    );

    test.each(cases)(
      '%s should return %s when has body and headers',
      (statusTest, code) => {
        expect(
          lambdaReturns[statusTest]({
            statusCode: code,
            headers: { ContentType: 'application/json' },
            body: '{"status":"success"}',
          })
        ).toBe(true);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: '{"status":"success"}',
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: '{"status":"success"}',
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: '{"status":"success"}',
          })
        ).toBe(false);
      }
    );

    test.each(cases)(
      '%s should return %s when has headers and no body',
      (statusTest, code) => {
        expect(
          lambdaReturns[statusTest]({
            statusCode: code,
            headers: { ContentType: 'application/json' },
            body: null,
          })
        ).toBe(true);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: null,
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: null,
          })
        ).toBe(false);

        expect(
          lambdaReturns[statusTest]({
            statusCode: randomInteger(code),
            headers: { ContentType: 'application/json' },
            body: null,
          })
        ).toBe(false);
      }
    );
  });
});
