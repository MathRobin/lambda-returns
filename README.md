[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-100-brightgreen)
![Static Badge](https://img.shields.io/badge/release-3.0.1-blue)
[![test](https://github.com/mathrobin/lambda-returns/actions/workflows/test.yml/badge.svg)](https://github.com/mathrobin/lambda-returns/actions/workflows/test.yml)

# lambda-returns

Provides shorthand to manage AWS lambda result. And provides test helper methods too!

ESM only since v3. Typings included.

## Usage

Deadly simple

```javascript
import { ok, internalServerError } from 'lambda-returns';

export default async () => {
  try {
    return ok({
      status: 'success',
    });
  } catch (err) {
    return internalServerError({
      status: 'error',
      error: err,
    });
  }
};
```

instead of that non-funny code:

```javascript
export default async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'success',
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 'error',
        error: err,
      }),
    };
  }
};
```

### Test helpers methods

Not enough for you? For me too. This package provides a simple way to test your return result from your AWS lambda
handler method.

```javascript
import { isOk, isBadRequest } from 'lambda-returns';

expect(isOk(result)).toBeTruthy();
expect(isBadRequest(result)).toBeTruthy();
```

## Pros

- No prod dependency
- Typings provided
- lower than 45kB unpacked

### Stop remember codes

You don't have to remember status code values. Just the name which is more "menaningful". Who really knows the code of:

- insufficientStorage
- partialContent
- imATeapot

You ? Me no. And don't want/need to.

### Stop polluting your business logic

Moreover, into vanilla AWS lambda way, you need to return a string as body. But just stringify your result is dangerous,
if you have a dynamic result, maybe is null, maybe is undefined, maybe you already have a string.

> F\*ck! I don't want to care of it in my business logic! `lambda-returns` manages it for you.

## Cons

There is only one known pitfall. We can't technically export "continue" status due to it's a reserved word in
JavaScript.

```javascript
export const continue = {}; // or whatever;
```

This is just forbidden. If you knwon any way to go over this problem, tell me.

Despite to this problem, test helper method `isContinue` is available.
