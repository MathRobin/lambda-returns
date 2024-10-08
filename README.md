[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-99.4-brightgreen)
![Static Badge](https://img.shields.io/badge/release-4.2.0-blue)
[![test](https://github.com/mathrobin/lambda-returns/actions/workflows/test.yml/badge.svg)](https://github.com/mathrobin/lambda-returns/actions/workflows/test.yml)

# lambda-returns

Provides shorthand to manage AWS lambda result. And provides test helper methods too!

Native TS. Typings included. 1 prod dependencies (AWS typings).

Tested with Node.js **18**, **20** and **22**.

## Usage

Deadly simple

```typescript
import {
  ok,
  internalServerError,
  OkLambdaResponse,
  InternalServerErrorLambdaResponse,
} from 'lambda-returns';

export default async ():
  | OkLambdaResponse
  | InternalServerErrorLambdaResponse => {
  try {
    return ok({
      // your business result
    });
  } catch (err) {
    return internalServerError();
  }
};
```

instead of that non-funny & non-typed code:

```typescript
export default async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        // your business result
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
    };
  }
};
```

Or this incorrect but possible code:

```typescript
export default async () => {
  return {
    isBase64Encoded: false,
    statusCode: 201, // no content code
    body: JSON.stringify({
      hello: "i'm anomaly",
    }), // yes you can do this with lambda
  };
};
```

Can be managed with:

```typescript
import { noContent, NoContentLambdaResponse } from 'lambda-returns';

export default async (): NoContentLambdaResponse => {
  return noContent();
};
```

### Handling binary response

Want to return a pdf file or any other file ? Easy :)

```typescript
import { ok, OkLambdaResponse } from 'lambda-returns';
import { lookup } from 'mime-types'; // we strongly recommend usage

const yourFile = '...';

export default async (): OkLambdaResponse => {
  return ok(
    Buffer.from(yourFile.body).toString('base64'), // only base64 content is supported. Like on native AWS way.
    {
      'Content-Type': lookup('filename.pdf'), // can be any other kind of file: xlsx, doc, png, svg, zip, ...
    },
    true // just add flag at end of call
  );
};
```

### Test helpers methods

Not enough for you? For me too. This package provides a simple way to test your return result from your AWS lambda
handler method.

```typescript
import { isOk, isBadRequest } from 'lambda-returns';

expect(isOk(result)).toBeTruthy();
expect(isBadRequest(result)).toBeTruthy();
```

## Pros

- Only one prod dependency (typings)
- Typings provided
- nearly 20kB unpacked, less than 2kB gzipped

### Stop remember codes

You don't have to remember status code values. Just the name which is more "menaningful". Who really knows the code of:

- insufficientStorage
- partialContent
- seeOther
- imATeapot

You ? Me no. And don't want/need to.

### Stop polluting your business logic

Moreover, into vanilla AWS lambda way, you need to return a string as body. But just stringify your result is dangerous,
if you have a dynamic result, maybe is null, maybe is undefined, maybe you already have a string.

> F\*ck! I don't want to care of it in my business logic! `lambda-returns` manages it for you.

## Cons

There is only one known pitfall. We can't technically export "continue" status due to it's a reserved word in
JavaScript/TypeScript.

```typescript
export const continue = {};
```

This is just forbidden. So you've to use this method:

```typescript
import { httpContinue, ContinueLambdaResponse } from 'lambda-returns';

export default async (): ContinueLambdaResponse => {
  return httpContinue();
};
```

Despite to this problem, test helper method `isContinue` is available and type `ContinueLambdaResponse` is consistent
too with the other types.
