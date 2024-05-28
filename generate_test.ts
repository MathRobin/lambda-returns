import { codes } from './codes';
import { writeFileSync } from 'node:fs';
import { upperFirst } from 'lodash-es';

const lib = codes
  .filter(([codename]) => codename !== 'noContent')
  .map(([codename, codenumber]) => {
    const codenameMethod = codename === 'continue' ? 'httpContinue' : codename;
    const helperMethod = `is${upperFirst(codename)}`;

    return `describe('${codename}', () => {
  test('should return ${codenumber} when empty args', () => {
    expect(${codenameMethod}()).toEqual({
      statusCode: ${codenumber},
      headers: {},
      body: null,
    });
  });

  test('should return ${codenumber} when empty body but headers filled', () => {
    expect(${codenameMethod}(undefined, { ContentType: 'application/json' })).toEqual({
      statusCode: ${codenumber},
      headers: { ContentType: 'application/json' },
      body: null,
    });
  });

  test('should return ${codenumber} when has obect body, no headers', () => {
    expect(${codenameMethod}({ status: 'success' })).toEqual({
      statusCode: ${codenumber},
      headers: {},
      body: '{"status":"success"}',
    });
  });

  test('should return ${codenumber} when has string body, no headers', () => {
    expect(${codenameMethod}('{"status":"success"}')).toEqual({
      statusCode: ${codenumber},
      headers: {},
      body: '{"status":"success"}',
    });
  });

  test('should return ${codenumber} when has obect body & headers', () => {
    expect(
      ${codenameMethod}(
        { status: 'success' },
        {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        }
      )
    ).toEqual({
      statusCode: ${codenumber},
      headers: {
        ContentType: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      body: '{"status":"success"}',
    });
  });

  test('should return ${codenumber} when has string body & headers', () => {
    expect(
      ${codenameMethod}('{"status":"success"}', { ContentType: 'application/json' })
    ).toEqual({
      statusCode: ${codenumber},
      headers: { ContentType: 'application/json' },
      body: '{"status":"success"}',
    });
  });
});

describe('${helperMethod}', () => {
  test('should be truthy when empty except code', () => {
    expect(${helperMethod}({
      statusCode: ${codenumber},
    })).toEqual(true);
  });

  test('should be truthy when body filled, empty headers', () => {
    expect(${helperMethod}({
      statusCode: ${codenumber},
      body: '{"status":"success"}',
    })).toEqual(true);
  });

  test('should be truthy when body empty, filled headers', () => {
    expect(${helperMethod}({
      statusCode: ${codenumber},
      headers: { ContentType: 'application/json' },
    })).toEqual(true);
  });

  test('should be truthy when fully filled', () => {
    expect(${helperMethod}({
      statusCode: ${codenumber},
      body: '{"status":"success"}',
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
    })).toEqual(true);
  });

  test('should be falsy when code empty', () => {
    expect(${helperMethod}({
    })).toEqual(false);
  });

  test('should be falsy when wrong code', () => {
    expect(${helperMethod}({
      statusCode: randomInteger(${codenumber}),
    })).toEqual(false);
  });

  test('should be falsy when wrong code + body filled, empty headers', () => {
    expect(${helperMethod}({
      statusCode: randomInteger(${codenumber}),
      body: '{"status":"success"}',
    })).toEqual(false);
  });

  test('should be falsy when wrong code + body empty, filled headers', () => {
    expect(${helperMethod}({
      statusCode: randomInteger(${codenumber}),
      headers: { ContentType: 'application/json' },
    })).toEqual(false);
  });

  test('should be falsy when wrong code + fully filled', () => {
    expect(${helperMethod}({
      statusCode: randomInteger(${codenumber}),
      body: '{"status":"success"}',
      headers: { 'Accept-Encoding': 'gzip, deflate, br' },
    })).toEqual(false);
  });
});
`;
  })
  .join('\n');

writeFileSync(
  './src/index.test.ts',
  `import { describe, expect, test } from 'vitest';
import { ${codes
    .filter(([codename]) => codename !== 'noContent')
    .map(
      ([codename]) =>
        `${codename === 'continue' ? 'httpContinue' : codename}, is${upperFirst(codename)}`
    )
    .join(', ')} } from '@/src';
import randomInteger from '@/src/random_integer';

${lib}`
);
