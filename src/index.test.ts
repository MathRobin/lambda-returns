import { beforeEach, describe, expect, test } from 'vitest';
import {
  accepted,
  badGateway,
  badRequest,
  bandwidthLimitExceeded,
  conflict,
  created,
  expectationFailed,
  failedDependency,
  forbidden,
  gatewayTimeOut,
  gone,
  httpContinue,
  httpVersionNotSupported,
  imATeapot,
  insufficientStorage,
  internalServerError,
  isAccepted,
  isBadGateway,
  isBadRequest,
  isBandwidthLimitExceeded,
  isConflict,
  isContinue,
  isCreated,
  isExpectationFailed,
  isFailedDependency,
  isForbidden,
  isGatewayTimeOut,
  isGone,
  isHttpVersionNotSupported,
  isImATeapot,
  isInsufficientStorage,
  isInternalServerError,
  isLengthRequired,
  isLocked,
  isMethodNotAllowed,
  isMovedPermanently,
  isMovedTemporarily,
  isMultipleChoices,
  isMultiStatus,
  isNetworkAuthenticationRequired,
  isNoContent,
  isNonAuthoritativeInformation,
  isNotAcceptable,
  isNotExtended,
  isNotFound,
  isNotImplemented,
  isNotModified,
  isOk,
  isPartialContent,
  isPaymentRequired,
  isPreconditionFailed,
  isPreconditionRequired,
  isProcessing,
  isProxyAuthenticationRequired,
  isRequestedRangeNotSatisfiable,
  isRequestEntityTooLarge,
  isRequestHeaderFieldsTooLarge,
  isRequestTimeOut,
  isRequestUriTooLarge,
  isResetContent,
  isSeeOther,
  isServiceUnavailable,
  isSwitchingProtocols,
  isTemporaryRedirect,
  isTooManyRequests,
  isUnauthorized,
  isUnorderedCollection,
  isUnprocessableEntity,
  isUnsupportedMediaType,
  isUpgradeRequired,
  isUseProxy,
  isVariantAlsoNegotiates,
  lengthRequired,
  locked,
  methodNotAllowed,
  movedPermanently,
  movedTemporarily,
  multipleChoices,
  multiStatus,
  networkAuthenticationRequired,
  noContent,
  nonAuthoritativeInformation,
  notAcceptable,
  notExtended,
  notFound,
  notImplemented,
  notModified,
  ok,
  partialContent,
  paymentRequired,
  preconditionFailed,
  preconditionRequired,
  processing,
  proxyAuthenticationRequired,
  requestedRangeNotSatisfiable,
  requestEntityTooLarge,
  requestHeaderFieldsTooLarge,
  requestTimeOut,
  requestUriTooLarge,
  resetContent,
  seeOther,
  serviceUnavailable,
  setAutoSerialize,
  switchingProtocols,
  temporaryRedirect,
  tooManyRequests,
  unauthorized,
  unorderedCollection,
  unprocessableEntity,
  unsupportedMediaType,
  upgradeRequired,
  useProxy,
  variantAlsoNegotiates,
} from '@/src';
import randomInteger from '@/src/random_integer';

describe('lambda-returns', () => {
  beforeEach(() => {
    setAutoSerialize(true);
  });

  describe('continue', () => {
    test('should return 100 when empty args', () => {
      expect(httpContinue()).toEqual({
        statusCode: 100,
        headers: {},
        body: null,
      });
    });

    test('should return 100 when empty body but headers filled', () => {
      expect(
        httpContinue(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 100,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 100 when has obect body, no headers', () => {
      expect(httpContinue({ status: 'success' })).toEqual({
        statusCode: 100,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 100 when has obect body + no serialize, no headers', () => {
      setAutoSerialize(false);
      expect(httpContinue({ status: 'success' })).toEqual({
        statusCode: 100,
        headers: {},
        body: { status: 'success' },
      });
    });

    test('should return 100 when has string body, no headers', () => {
      expect(httpContinue('{"status":"success"}')).toEqual({
        statusCode: 100,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 100 when has obect body & headers', () => {
      expect(
        httpContinue(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 100,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 100 when has string body & headers', () => {
      expect(
        httpContinue('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 100,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isContinue', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isContinue({
          statusCode: 100,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isContinue({
          statusCode: 100,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isContinue({
          statusCode: 100,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isContinue({
          statusCode: 100,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isContinue({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isContinue({
          statusCode: randomInteger(100),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isContinue({
          statusCode: randomInteger(100),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isContinue({
          statusCode: randomInteger(100),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isContinue({
          statusCode: randomInteger(100),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('switchingProtocols', () => {
    test('should return 101 when empty args', () => {
      expect(switchingProtocols()).toEqual({
        statusCode: 101,
        headers: {},
        body: null,
      });
    });

    test('should return 101 when empty body but headers filled', () => {
      expect(
        switchingProtocols(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 101,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 101 when has obect body, no headers', () => {
      expect(switchingProtocols({ status: 'success' })).toEqual({
        statusCode: 101,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 101 when has string body, no headers', () => {
      expect(switchingProtocols('{"status":"success"}')).toEqual({
        statusCode: 101,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 101 when has obect body & headers', () => {
      expect(
        switchingProtocols(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 101,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 101 when has obect body & headers', () => {
      setAutoSerialize(false);
      expect(
        switchingProtocols(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 101,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: { status: 'success' },
      });
    });

    test('should return 101 when has string body & headers', () => {
      expect(
        switchingProtocols('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 101,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isSwitchingProtocols', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isSwitchingProtocols({
          statusCode: 101,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isSwitchingProtocols({
          statusCode: 101,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isSwitchingProtocols({
          statusCode: 101,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isSwitchingProtocols({
          statusCode: 101,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isSwitchingProtocols({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isSwitchingProtocols({
          statusCode: randomInteger(101),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isSwitchingProtocols({
          statusCode: randomInteger(101),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isSwitchingProtocols({
          statusCode: randomInteger(101),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isSwitchingProtocols({
          statusCode: randomInteger(101),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('processing', () => {
    test('should return 102 when empty args', () => {
      expect(processing()).toEqual({
        statusCode: 102,
        headers: {},
        body: null,
      });
    });

    test('should return 102 when empty body but headers filled', () => {
      expect(
        processing(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 102,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 102 when has obect body, no headers', () => {
      expect(processing({ status: 'success' })).toEqual({
        statusCode: 102,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 102 when has string body, no headers', () => {
      expect(processing('{"status":"success"}')).toEqual({
        statusCode: 102,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 102 when has obect body & headers', () => {
      expect(
        processing(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 102,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 102 when has string body & headers', () => {
      expect(
        processing('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 102,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isProcessing', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isProcessing({
          statusCode: 102,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isProcessing({
          statusCode: 102,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isProcessing({
          statusCode: 102,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isProcessing({
          statusCode: 102,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isProcessing({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isProcessing({
          statusCode: randomInteger(102),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isProcessing({
          statusCode: randomInteger(102),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isProcessing({
          statusCode: randomInteger(102),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isProcessing({
          statusCode: randomInteger(102),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('ok', () => {
    test('should return 200 when empty args', () => {
      expect(ok()).toEqual({
        statusCode: 200,
        headers: {},
        body: null,
      });
    });

    test('should return 200 when empty body but headers filled', () => {
      expect(ok(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 200,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 200 when has obect body, no headers', () => {
      expect(ok({ status: 'success' })).toEqual({
        statusCode: 200,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 200 when has string body, no headers', () => {
      expect(ok('{"status":"success"}')).toEqual({
        statusCode: 200,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 200 when has obect body & headers', () => {
      expect(
        ok(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 200,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 200 when has string body & headers', () => {
      expect(
        ok('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 200,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isOk', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isOk({
          statusCode: 200,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isOk({
          statusCode: 200,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isOk({
          statusCode: 200,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isOk({
          statusCode: 200,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isOk({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isOk({
          statusCode: randomInteger(200),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isOk({
          statusCode: randomInteger(200),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isOk({
          statusCode: randomInteger(200),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isOk({
          statusCode: randomInteger(200),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('created', () => {
    test('should return 201 when empty args', () => {
      expect(created()).toEqual({
        statusCode: 201,
        headers: {},
        body: null,
      });
    });

    test('should return 201 when empty body but headers filled', () => {
      expect(created(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 201,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 201 when has obect body, no headers', () => {
      expect(created({ status: 'success' })).toEqual({
        statusCode: 201,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 201 when has string body, no headers', () => {
      expect(created('{"status":"success"}')).toEqual({
        statusCode: 201,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 201 when has obect body & headers', () => {
      expect(
        created(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 201,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 201 when has string body & headers', () => {
      expect(
        created('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 201,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isCreated', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isCreated({
          statusCode: 201,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isCreated({
          statusCode: 201,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isCreated({
          statusCode: 201,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isCreated({
          statusCode: 201,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isCreated({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isCreated({
          statusCode: randomInteger(201),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isCreated({
          statusCode: randomInteger(201),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isCreated({
          statusCode: randomInteger(201),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isCreated({
          statusCode: randomInteger(201),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('accepted', () => {
    test('should return 202 when empty args', () => {
      expect(accepted()).toEqual({
        statusCode: 202,
        headers: {},
        body: null,
      });
    });

    test('should return 202 when empty body but headers filled', () => {
      expect(accepted(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 202,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 202 when has obect body, no headers', () => {
      expect(accepted({ status: 'success' })).toEqual({
        statusCode: 202,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 202 when has string body, no headers', () => {
      expect(accepted('{"status":"success"}')).toEqual({
        statusCode: 202,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 202 when has obect body & headers', () => {
      expect(
        accepted(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 202,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 202 when has string body & headers', () => {
      expect(
        accepted('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 202,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isAccepted', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isAccepted({
          statusCode: 202,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isAccepted({
          statusCode: 202,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isAccepted({
          statusCode: 202,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isAccepted({
          statusCode: 202,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isAccepted({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isAccepted({
          statusCode: randomInteger(202),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isAccepted({
          statusCode: randomInteger(202),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isAccepted({
          statusCode: randomInteger(202),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isAccepted({
          statusCode: randomInteger(202),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('nonAuthoritativeInformation', () => {
    test('should return 203 when empty args', () => {
      expect(nonAuthoritativeInformation()).toEqual({
        statusCode: 203,
        headers: {},
        body: null,
      });
    });

    test('should return 203 when empty body but headers filled', () => {
      expect(
        nonAuthoritativeInformation(undefined, {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 203,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 203 when has obect body, no headers', () => {
      expect(nonAuthoritativeInformation({ status: 'success' })).toEqual({
        statusCode: 203,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 203 when has string body, no headers', () => {
      expect(nonAuthoritativeInformation('{"status":"success"}')).toEqual({
        statusCode: 203,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 203 when has obect body & headers', () => {
      expect(
        nonAuthoritativeInformation(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 203,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 203 when has string body & headers', () => {
      expect(
        nonAuthoritativeInformation('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 203,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNonAuthoritativeInformation', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: 203,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: 203,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: 203,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: 203,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNonAuthoritativeInformation({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: randomInteger(203),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: randomInteger(203),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: randomInteger(203),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNonAuthoritativeInformation({
          statusCode: randomInteger(203),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('resetContent', () => {
    test('should return 205 when empty args', () => {
      expect(resetContent()).toEqual({
        statusCode: 205,
        headers: {},
        body: null,
      });
    });

    test('should return 205 when empty body but headers filled', () => {
      expect(
        resetContent(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 205,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 205 when has obect body, no headers', () => {
      expect(resetContent({ status: 'success' })).toEqual({
        statusCode: 205,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 205 when has string body, no headers', () => {
      expect(resetContent('{"status":"success"}')).toEqual({
        statusCode: 205,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 205 when has obect body & headers', () => {
      expect(
        resetContent(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 205,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 205 when has string body & headers', () => {
      expect(
        resetContent('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 205,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isResetContent', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isResetContent({
          statusCode: 205,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isResetContent({
          statusCode: 205,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isResetContent({
          statusCode: 205,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isResetContent({
          statusCode: 205,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isResetContent({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isResetContent({
          statusCode: randomInteger(205),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isResetContent({
          statusCode: randomInteger(205),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isResetContent({
          statusCode: randomInteger(205),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isResetContent({
          statusCode: randomInteger(205),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('partialContent', () => {
    test('should return 206 when empty args', () => {
      expect(partialContent()).toEqual({
        statusCode: 206,
        headers: {},
        body: null,
      });
    });

    test('should return 206 when empty body but headers filled', () => {
      expect(
        partialContent(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 206,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 206 when has obect body, no headers', () => {
      expect(partialContent({ status: 'success' })).toEqual({
        statusCode: 206,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 206 when has string body, no headers', () => {
      expect(partialContent('{"status":"success"}')).toEqual({
        statusCode: 206,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 206 when has obect body & headers', () => {
      expect(
        partialContent(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 206,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 206 when has string body & headers', () => {
      expect(
        partialContent('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 206,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isPartialContent', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isPartialContent({
          statusCode: 206,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isPartialContent({
          statusCode: 206,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isPartialContent({
          statusCode: 206,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isPartialContent({
          statusCode: 206,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isPartialContent({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isPartialContent({
          statusCode: randomInteger(206),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isPartialContent({
          statusCode: randomInteger(206),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isPartialContent({
          statusCode: randomInteger(206),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isPartialContent({
          statusCode: randomInteger(206),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('multiStatus', () => {
    test('should return 207 when empty args', () => {
      expect(multiStatus()).toEqual({
        statusCode: 207,
        headers: {},
        body: null,
      });
    });

    test('should return 207 when empty body but headers filled', () => {
      expect(
        multiStatus(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 207,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 207 when has obect body, no headers', () => {
      expect(multiStatus({ status: 'success' })).toEqual({
        statusCode: 207,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 207 when has string body, no headers', () => {
      expect(multiStatus('{"status":"success"}')).toEqual({
        statusCode: 207,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 207 when has obect body & headers', () => {
      expect(
        multiStatus(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 207,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 207 when has string body & headers', () => {
      expect(
        multiStatus('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 207,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isMultiStatus', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isMultiStatus({
          statusCode: 207,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isMultiStatus({
          statusCode: 207,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isMultiStatus({
          statusCode: 207,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isMultiStatus({
          statusCode: 207,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isMultiStatus({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isMultiStatus({
          statusCode: randomInteger(207),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isMultiStatus({
          statusCode: randomInteger(207),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isMultiStatus({
          statusCode: randomInteger(207),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isMultiStatus({
          statusCode: randomInteger(207),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('multipleChoices', () => {
    test('should return 300 when empty args', () => {
      expect(multipleChoices()).toEqual({
        statusCode: 300,
        headers: {},
        body: null,
      });
    });

    test('should return 300 when empty body but headers filled', () => {
      expect(
        multipleChoices(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 300,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 300 when has obect body, no headers', () => {
      expect(multipleChoices({ status: 'success' })).toEqual({
        statusCode: 300,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 300 when has string body, no headers', () => {
      expect(multipleChoices('{"status":"success"}')).toEqual({
        statusCode: 300,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 300 when has obect body & headers', () => {
      expect(
        multipleChoices(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 300,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 300 when has string body & headers', () => {
      expect(
        multipleChoices('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 300,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isMultipleChoices', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isMultipleChoices({
          statusCode: 300,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isMultipleChoices({
          statusCode: 300,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isMultipleChoices({
          statusCode: 300,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isMultipleChoices({
          statusCode: 300,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isMultipleChoices({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isMultipleChoices({
          statusCode: randomInteger(300),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isMultipleChoices({
          statusCode: randomInteger(300),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isMultipleChoices({
          statusCode: randomInteger(300),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isMultipleChoices({
          statusCode: randomInteger(300),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('movedPermanently', () => {
    test('should return 301 when empty args', () => {
      expect(movedPermanently()).toEqual({
        statusCode: 301,
        headers: {},
        body: null,
      });
    });

    test('should return 301 when empty body but headers filled', () => {
      expect(
        movedPermanently(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 301,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 301 when has obect body, no headers', () => {
      expect(movedPermanently({ status: 'success' })).toEqual({
        statusCode: 301,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 301 when has string body, no headers', () => {
      expect(movedPermanently('{"status":"success"}')).toEqual({
        statusCode: 301,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 301 when has obect body & headers', () => {
      expect(
        movedPermanently(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 301,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 301 when has string body & headers', () => {
      expect(
        movedPermanently('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 301,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isMovedPermanently', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isMovedPermanently({
          statusCode: 301,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isMovedPermanently({
          statusCode: 301,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isMovedPermanently({
          statusCode: 301,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isMovedPermanently({
          statusCode: 301,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isMovedPermanently({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isMovedPermanently({
          statusCode: randomInteger(301),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isMovedPermanently({
          statusCode: randomInteger(301),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isMovedPermanently({
          statusCode: randomInteger(301),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isMovedPermanently({
          statusCode: randomInteger(301),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('movedTemporarily', () => {
    test('should return 302 when empty args', () => {
      expect(movedTemporarily()).toEqual({
        statusCode: 302,
        headers: {},
        body: null,
      });
    });

    test('should return 302 when empty body but headers filled', () => {
      expect(
        movedTemporarily(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 302,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 302 when has obect body, no headers', () => {
      expect(movedTemporarily({ status: 'success' })).toEqual({
        statusCode: 302,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 302 when has string body, no headers', () => {
      expect(movedTemporarily('{"status":"success"}')).toEqual({
        statusCode: 302,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 302 when has obect body & headers', () => {
      expect(
        movedTemporarily(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 302,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 302 when has string body & headers', () => {
      expect(
        movedTemporarily('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 302,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isMovedTemporarily', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isMovedTemporarily({
          statusCode: 302,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isMovedTemporarily({
          statusCode: 302,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isMovedTemporarily({
          statusCode: 302,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isMovedTemporarily({
          statusCode: 302,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isMovedTemporarily({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isMovedTemporarily({
          statusCode: randomInteger(302),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isMovedTemporarily({
          statusCode: randomInteger(302),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isMovedTemporarily({
          statusCode: randomInteger(302),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isMovedTemporarily({
          statusCode: randomInteger(302),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('seeOther', () => {
    test('should return 303 when empty args', () => {
      expect(seeOther()).toEqual({
        statusCode: 303,
        headers: {},
        body: null,
      });
    });

    test('should return 303 when empty body but headers filled', () => {
      expect(seeOther(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 303,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 303 when has obect body, no headers', () => {
      expect(seeOther({ status: 'success' })).toEqual({
        statusCode: 303,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 303 when has string body, no headers', () => {
      expect(seeOther('{"status":"success"}')).toEqual({
        statusCode: 303,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 303 when has obect body & headers', () => {
      expect(
        seeOther(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 303,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 303 when has string body & headers', () => {
      expect(
        seeOther('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 303,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isSeeOther', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isSeeOther({
          statusCode: 303,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isSeeOther({
          statusCode: 303,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isSeeOther({
          statusCode: 303,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isSeeOther({
          statusCode: 303,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isSeeOther({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isSeeOther({
          statusCode: randomInteger(303),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isSeeOther({
          statusCode: randomInteger(303),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isSeeOther({
          statusCode: randomInteger(303),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isSeeOther({
          statusCode: randomInteger(303),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('noContent', () => {
    test('should return 204 when empty args', () => {
      expect(noContent()).toEqual({
        statusCode: 204,
        headers: {},
      });
    });

    test('should return 204 when headers filled', () => {
      expect(
        noContent({ ContentType: 'application/json', 'accept-charset': 'utf8' })
      ).toEqual({
        statusCode: 204,
        headers: { ContentType: 'application/json', 'accept-charset': 'utf8' },
      });
    });
  });

  describe('isNoContent', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNoContent({
          statusCode: 204,
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNoContent({
          statusCode: 204,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNoContent({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNoContent({
          statusCode: randomInteger(204),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + filled headers', () => {
      expect(
        isNoContent({
          statusCode: randomInteger(204),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });
  });

  describe('notModified', () => {
    test('should return 304 when empty args', () => {
      expect(notModified()).toEqual({
        statusCode: 304,
        headers: {},
        body: null,
      });
    });

    test('should return 304 when empty body but headers filled', () => {
      expect(
        notModified(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 304,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 304 when has obect body, no headers', () => {
      expect(notModified({ status: 'success' })).toEqual({
        statusCode: 304,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 304 when has string body, no headers', () => {
      expect(notModified('{"status":"success"}')).toEqual({
        statusCode: 304,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 304 when has obect body & headers', () => {
      expect(
        notModified(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 304,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 304 when has string body & headers', () => {
      expect(
        notModified('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 304,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNotModified', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNotModified({
          statusCode: 304,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNotModified({
          statusCode: 304,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNotModified({
          statusCode: 304,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNotModified({
          statusCode: 304,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNotModified({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNotModified({
          statusCode: randomInteger(304),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNotModified({
          statusCode: randomInteger(304),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNotModified({
          statusCode: randomInteger(304),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNotModified({
          statusCode: randomInteger(304),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('useProxy', () => {
    test('should return 305 when empty args', () => {
      expect(useProxy()).toEqual({
        statusCode: 305,
        headers: {},
        body: null,
      });
    });

    test('should return 305 when empty body but headers filled', () => {
      expect(useProxy(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 305,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 305 when has obect body, no headers', () => {
      expect(useProxy({ status: 'success' })).toEqual({
        statusCode: 305,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 305 when has string body, no headers', () => {
      expect(useProxy('{"status":"success"}')).toEqual({
        statusCode: 305,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 305 when has obect body & headers', () => {
      expect(
        useProxy(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 305,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 305 when has string body & headers', () => {
      expect(
        useProxy('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 305,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUseProxy', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUseProxy({
          statusCode: 305,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUseProxy({
          statusCode: 305,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUseProxy({
          statusCode: 305,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUseProxy({
          statusCode: 305,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUseProxy({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUseProxy({
          statusCode: randomInteger(305),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUseProxy({
          statusCode: randomInteger(305),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUseProxy({
          statusCode: randomInteger(305),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUseProxy({
          statusCode: randomInteger(305),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('temporaryRedirect', () => {
    test('should return 307 when empty args', () => {
      expect(temporaryRedirect()).toEqual({
        statusCode: 307,
        headers: {},
        body: null,
      });
    });

    test('should return 307 when empty body but headers filled', () => {
      expect(
        temporaryRedirect(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 307,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 307 when has obect body, no headers', () => {
      expect(temporaryRedirect({ status: 'success' })).toEqual({
        statusCode: 307,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 307 when has string body, no headers', () => {
      expect(temporaryRedirect('{"status":"success"}')).toEqual({
        statusCode: 307,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 307 when has obect body & headers', () => {
      expect(
        temporaryRedirect(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 307,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 307 when has string body & headers', () => {
      expect(
        temporaryRedirect('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 307,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isTemporaryRedirect', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isTemporaryRedirect({
          statusCode: 307,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isTemporaryRedirect({
          statusCode: 307,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isTemporaryRedirect({
          statusCode: 307,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isTemporaryRedirect({
          statusCode: 307,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isTemporaryRedirect({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isTemporaryRedirect({
          statusCode: randomInteger(307),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isTemporaryRedirect({
          statusCode: randomInteger(307),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isTemporaryRedirect({
          statusCode: randomInteger(307),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isTemporaryRedirect({
          statusCode: randomInteger(307),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('badRequest', () => {
    test('should return 400 when empty args', () => {
      expect(badRequest()).toEqual({
        statusCode: 400,
        headers: {},
        body: null,
      });
    });

    test('should return 400 when empty body but headers filled', () => {
      expect(
        badRequest(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 400,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 400 when has obect body, no headers', () => {
      expect(badRequest({ status: 'success' })).toEqual({
        statusCode: 400,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 400 when has string body, no headers', () => {
      expect(badRequest('{"status":"success"}')).toEqual({
        statusCode: 400,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 400 when has obect body & headers', () => {
      expect(
        badRequest(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 400,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 400 when has string body & headers', () => {
      expect(
        badRequest('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 400,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isBadRequest', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isBadRequest({
          statusCode: 400,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isBadRequest({
          statusCode: 400,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isBadRequest({
          statusCode: 400,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isBadRequest({
          statusCode: 400,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isBadRequest({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isBadRequest({
          statusCode: randomInteger(400),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isBadRequest({
          statusCode: randomInteger(400),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isBadRequest({
          statusCode: randomInteger(400),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isBadRequest({
          statusCode: randomInteger(400),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('unauthorized', () => {
    test('should return 401 when empty args', () => {
      expect(unauthorized()).toEqual({
        statusCode: 401,
        headers: {},
        body: null,
      });
    });

    test('should return 401 when empty body but headers filled', () => {
      expect(
        unauthorized(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 401,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 401 when has obect body, no headers', () => {
      expect(unauthorized({ status: 'success' })).toEqual({
        statusCode: 401,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 401 when has string body, no headers', () => {
      expect(unauthorized('{"status":"success"}')).toEqual({
        statusCode: 401,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 401 when has obect body & headers', () => {
      expect(
        unauthorized(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 401,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 401 when has string body & headers', () => {
      expect(
        unauthorized('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 401,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUnauthorized', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUnauthorized({
          statusCode: 401,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUnauthorized({
          statusCode: 401,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUnauthorized({
          statusCode: 401,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUnauthorized({
          statusCode: 401,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUnauthorized({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUnauthorized({
          statusCode: randomInteger(401),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUnauthorized({
          statusCode: randomInteger(401),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUnauthorized({
          statusCode: randomInteger(401),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUnauthorized({
          statusCode: randomInteger(401),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('paymentRequired', () => {
    test('should return 402 when empty args', () => {
      expect(paymentRequired()).toEqual({
        statusCode: 402,
        headers: {},
        body: null,
      });
    });

    test('should return 402 when empty body but headers filled', () => {
      expect(
        paymentRequired(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 402,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 402 when has obect body, no headers', () => {
      expect(paymentRequired({ status: 'success' })).toEqual({
        statusCode: 402,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 402 when has string body, no headers', () => {
      expect(paymentRequired('{"status":"success"}')).toEqual({
        statusCode: 402,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 402 when has obect body & headers', () => {
      expect(
        paymentRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 402,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 402 when has string body & headers', () => {
      expect(
        paymentRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 402,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isPaymentRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isPaymentRequired({
          statusCode: 402,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isPaymentRequired({
          statusCode: 402,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isPaymentRequired({
          statusCode: 402,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isPaymentRequired({
          statusCode: 402,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isPaymentRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isPaymentRequired({
          statusCode: randomInteger(402),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isPaymentRequired({
          statusCode: randomInteger(402),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isPaymentRequired({
          statusCode: randomInteger(402),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isPaymentRequired({
          statusCode: randomInteger(402),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('forbidden', () => {
    test('should return 403 when empty args', () => {
      expect(forbidden()).toEqual({
        statusCode: 403,
        headers: {},
        body: null,
      });
    });

    test('should return 403 when empty body but headers filled', () => {
      expect(forbidden(undefined, { ContentType: 'application/json' })).toEqual(
        {
          statusCode: 403,
          headers: { ContentType: 'application/json' },
          body: null,
        }
      );
    });

    test('should return 403 when has obect body, no headers', () => {
      expect(forbidden({ status: 'success' })).toEqual({
        statusCode: 403,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 403 when has string body, no headers', () => {
      expect(forbidden('{"status":"success"}')).toEqual({
        statusCode: 403,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 403 when has obect body & headers', () => {
      expect(
        forbidden(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 403,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 403 when has string body & headers', () => {
      expect(
        forbidden('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 403,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isForbidden', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isForbidden({
          statusCode: 403,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isForbidden({
          statusCode: 403,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isForbidden({
          statusCode: 403,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isForbidden({
          statusCode: 403,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isForbidden({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isForbidden({
          statusCode: randomInteger(403),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isForbidden({
          statusCode: randomInteger(403),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isForbidden({
          statusCode: randomInteger(403),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isForbidden({
          statusCode: randomInteger(403),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('notFound', () => {
    test('should return 404 when empty args', () => {
      expect(notFound()).toEqual({
        statusCode: 404,
        headers: {},
        body: null,
      });
    });

    test('should return 404 when empty body but headers filled', () => {
      expect(notFound(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 404,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 404 when has obect body, no headers', () => {
      expect(notFound({ status: 'success' })).toEqual({
        statusCode: 404,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 404 when has string body, no headers', () => {
      expect(notFound('{"status":"success"}')).toEqual({
        statusCode: 404,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 404 when has obect body & headers', () => {
      expect(
        notFound(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 404,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 404 when has string body & headers', () => {
      expect(
        notFound('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 404,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNotFound', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNotFound({
          statusCode: 404,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNotFound({
          statusCode: 404,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNotFound({
          statusCode: 404,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNotFound({
          statusCode: 404,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNotFound({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNotFound({
          statusCode: randomInteger(404),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNotFound({
          statusCode: randomInteger(404),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNotFound({
          statusCode: randomInteger(404),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNotFound({
          statusCode: randomInteger(404),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('methodNotAllowed', () => {
    test('should return 405 when empty args', () => {
      expect(methodNotAllowed()).toEqual({
        statusCode: 405,
        headers: {},
        body: null,
      });
    });

    test('should return 405 when empty body but headers filled', () => {
      expect(
        methodNotAllowed(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 405,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 405 when has obect body, no headers', () => {
      expect(methodNotAllowed({ status: 'success' })).toEqual({
        statusCode: 405,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 405 when has string body, no headers', () => {
      expect(methodNotAllowed('{"status":"success"}')).toEqual({
        statusCode: 405,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 405 when has obect body & headers', () => {
      expect(
        methodNotAllowed(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 405,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 405 when has string body & headers', () => {
      expect(
        methodNotAllowed('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 405,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isMethodNotAllowed', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isMethodNotAllowed({
          statusCode: 405,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isMethodNotAllowed({
          statusCode: 405,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isMethodNotAllowed({
          statusCode: 405,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isMethodNotAllowed({
          statusCode: 405,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isMethodNotAllowed({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isMethodNotAllowed({
          statusCode: randomInteger(405),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isMethodNotAllowed({
          statusCode: randomInteger(405),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isMethodNotAllowed({
          statusCode: randomInteger(405),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isMethodNotAllowed({
          statusCode: randomInteger(405),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('notAcceptable', () => {
    test('should return 406 when empty args', () => {
      expect(notAcceptable()).toEqual({
        statusCode: 406,
        headers: {},
        body: null,
      });
    });

    test('should return 406 when empty body but headers filled', () => {
      expect(
        notAcceptable(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 406,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 406 when has obect body, no headers', () => {
      expect(notAcceptable({ status: 'success' })).toEqual({
        statusCode: 406,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 406 when has string body, no headers', () => {
      expect(notAcceptable('{"status":"success"}')).toEqual({
        statusCode: 406,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 406 when has obect body & headers', () => {
      expect(
        notAcceptable(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 406,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 406 when has string body & headers', () => {
      expect(
        notAcceptable('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 406,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNotAcceptable', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNotAcceptable({
          statusCode: 406,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNotAcceptable({
          statusCode: 406,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNotAcceptable({
          statusCode: 406,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNotAcceptable({
          statusCode: 406,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNotAcceptable({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNotAcceptable({
          statusCode: randomInteger(406),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNotAcceptable({
          statusCode: randomInteger(406),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNotAcceptable({
          statusCode: randomInteger(406),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNotAcceptable({
          statusCode: randomInteger(406),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('proxyAuthenticationRequired', () => {
    test('should return 407 when empty args', () => {
      expect(proxyAuthenticationRequired()).toEqual({
        statusCode: 407,
        headers: {},
        body: null,
      });
    });

    test('should return 407 when empty body but headers filled', () => {
      expect(
        proxyAuthenticationRequired(undefined, {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 407,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 407 when has obect body, no headers', () => {
      expect(proxyAuthenticationRequired({ status: 'success' })).toEqual({
        statusCode: 407,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 407 when has string body, no headers', () => {
      expect(proxyAuthenticationRequired('{"status":"success"}')).toEqual({
        statusCode: 407,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 407 when has obect body & headers', () => {
      expect(
        proxyAuthenticationRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 407,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 407 when has string body & headers', () => {
      expect(
        proxyAuthenticationRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 407,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isProxyAuthenticationRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: 407,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: 407,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: 407,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: 407,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isProxyAuthenticationRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: randomInteger(407),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: randomInteger(407),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: randomInteger(407),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isProxyAuthenticationRequired({
          statusCode: randomInteger(407),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('requestTimeOut', () => {
    test('should return 408 when empty args', () => {
      expect(requestTimeOut()).toEqual({
        statusCode: 408,
        headers: {},
        body: null,
      });
    });

    test('should return 408 when empty body but headers filled', () => {
      expect(
        requestTimeOut(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 408,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 408 when has obect body, no headers', () => {
      expect(requestTimeOut({ status: 'success' })).toEqual({
        statusCode: 408,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 408 when has string body, no headers', () => {
      expect(requestTimeOut('{"status":"success"}')).toEqual({
        statusCode: 408,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 408 when has obect body & headers', () => {
      expect(
        requestTimeOut(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 408,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 408 when has string body & headers', () => {
      expect(
        requestTimeOut('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 408,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isRequestTimeOut', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isRequestTimeOut({
          statusCode: 408,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isRequestTimeOut({
          statusCode: 408,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isRequestTimeOut({
          statusCode: 408,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isRequestTimeOut({
          statusCode: 408,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isRequestTimeOut({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isRequestTimeOut({
          statusCode: randomInteger(408),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isRequestTimeOut({
          statusCode: randomInteger(408),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isRequestTimeOut({
          statusCode: randomInteger(408),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isRequestTimeOut({
          statusCode: randomInteger(408),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('conflict', () => {
    test('should return 409 when empty args', () => {
      expect(conflict()).toEqual({
        statusCode: 409,
        headers: {},
        body: null,
      });
    });

    test('should return 409 when empty body but headers filled', () => {
      expect(conflict(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 409,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 409 when has obect body, no headers', () => {
      expect(conflict({ status: 'success' })).toEqual({
        statusCode: 409,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 409 when has string body, no headers', () => {
      expect(conflict('{"status":"success"}')).toEqual({
        statusCode: 409,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 409 when has obect body & headers', () => {
      expect(
        conflict(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 409,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 409 when has string body & headers', () => {
      expect(
        conflict('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 409,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isConflict', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isConflict({
          statusCode: 409,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isConflict({
          statusCode: 409,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isConflict({
          statusCode: 409,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isConflict({
          statusCode: 409,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isConflict({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isConflict({
          statusCode: randomInteger(409),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isConflict({
          statusCode: randomInteger(409),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isConflict({
          statusCode: randomInteger(409),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isConflict({
          statusCode: randomInteger(409),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('gone', () => {
    test('should return 410 when empty args', () => {
      expect(gone()).toEqual({
        statusCode: 410,
        headers: {},
        body: null,
      });
    });

    test('should return 410 when empty body but headers filled', () => {
      expect(gone(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 410,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 410 when has obect body, no headers', () => {
      expect(gone({ status: 'success' })).toEqual({
        statusCode: 410,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 410 when has string body, no headers', () => {
      expect(gone('{"status":"success"}')).toEqual({
        statusCode: 410,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 410 when has obect body & headers', () => {
      expect(
        gone(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 410,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 410 when has string body & headers', () => {
      expect(
        gone('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 410,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isGone', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isGone({
          statusCode: 410,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isGone({
          statusCode: 410,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isGone({
          statusCode: 410,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isGone({
          statusCode: 410,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isGone({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isGone({
          statusCode: randomInteger(410),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isGone({
          statusCode: randomInteger(410),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isGone({
          statusCode: randomInteger(410),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isGone({
          statusCode: randomInteger(410),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('lengthRequired', () => {
    test('should return 411 when empty args', () => {
      expect(lengthRequired()).toEqual({
        statusCode: 411,
        headers: {},
        body: null,
      });
    });

    test('should return 411 when empty body but headers filled', () => {
      expect(
        lengthRequired(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 411,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 411 when has obect body, no headers', () => {
      expect(lengthRequired({ status: 'success' })).toEqual({
        statusCode: 411,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 411 when has string body, no headers', () => {
      expect(lengthRequired('{"status":"success"}')).toEqual({
        statusCode: 411,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 411 when has obect body & headers', () => {
      expect(
        lengthRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 411,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 411 when has string body & headers', () => {
      expect(
        lengthRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 411,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isLengthRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isLengthRequired({
          statusCode: 411,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isLengthRequired({
          statusCode: 411,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isLengthRequired({
          statusCode: 411,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isLengthRequired({
          statusCode: 411,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isLengthRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isLengthRequired({
          statusCode: randomInteger(411),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isLengthRequired({
          statusCode: randomInteger(411),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isLengthRequired({
          statusCode: randomInteger(411),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isLengthRequired({
          statusCode: randomInteger(411),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('preconditionFailed', () => {
    test('should return 412 when empty args', () => {
      expect(preconditionFailed()).toEqual({
        statusCode: 412,
        headers: {},
        body: null,
      });
    });

    test('should return 412 when empty body but headers filled', () => {
      expect(
        preconditionFailed(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 412,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 412 when has obect body, no headers', () => {
      expect(preconditionFailed({ status: 'success' })).toEqual({
        statusCode: 412,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 412 when has string body, no headers', () => {
      expect(preconditionFailed('{"status":"success"}')).toEqual({
        statusCode: 412,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 412 when has obect body & headers', () => {
      expect(
        preconditionFailed(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 412,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 412 when has string body & headers', () => {
      expect(
        preconditionFailed('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 412,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isPreconditionFailed', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isPreconditionFailed({
          statusCode: 412,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isPreconditionFailed({
          statusCode: 412,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isPreconditionFailed({
          statusCode: 412,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isPreconditionFailed({
          statusCode: 412,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isPreconditionFailed({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isPreconditionFailed({
          statusCode: randomInteger(412),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isPreconditionFailed({
          statusCode: randomInteger(412),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isPreconditionFailed({
          statusCode: randomInteger(412),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isPreconditionFailed({
          statusCode: randomInteger(412),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('requestEntityTooLarge', () => {
    test('should return 413 when empty args', () => {
      expect(requestEntityTooLarge()).toEqual({
        statusCode: 413,
        headers: {},
        body: null,
      });
    });

    test('should return 413 when empty body but headers filled', () => {
      expect(
        requestEntityTooLarge(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 413,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 413 when has obect body, no headers', () => {
      expect(requestEntityTooLarge({ status: 'success' })).toEqual({
        statusCode: 413,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 413 when has string body, no headers', () => {
      expect(requestEntityTooLarge('{"status":"success"}')).toEqual({
        statusCode: 413,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 413 when has obect body & headers', () => {
      expect(
        requestEntityTooLarge(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 413,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 413 when has string body & headers', () => {
      expect(
        requestEntityTooLarge('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 413,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isRequestEntityTooLarge', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: 413,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: 413,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: 413,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: 413,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isRequestEntityTooLarge({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: randomInteger(413),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: randomInteger(413),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: randomInteger(413),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isRequestEntityTooLarge({
          statusCode: randomInteger(413),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('requestUriTooLarge', () => {
    test('should return 414 when empty args', () => {
      expect(requestUriTooLarge()).toEqual({
        statusCode: 414,
        headers: {},
        body: null,
      });
    });

    test('should return 414 when empty body but headers filled', () => {
      expect(
        requestUriTooLarge(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 414,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 414 when has obect body, no headers', () => {
      expect(requestUriTooLarge({ status: 'success' })).toEqual({
        statusCode: 414,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 414 when has string body, no headers', () => {
      expect(requestUriTooLarge('{"status":"success"}')).toEqual({
        statusCode: 414,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 414 when has obect body & headers', () => {
      expect(
        requestUriTooLarge(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 414,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 414 when has string body & headers', () => {
      expect(
        requestUriTooLarge('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 414,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isRequestUriTooLarge', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: 414,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: 414,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: 414,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: 414,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isRequestUriTooLarge({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: randomInteger(414),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: randomInteger(414),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: randomInteger(414),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isRequestUriTooLarge({
          statusCode: randomInteger(414),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('unsupportedMediaType', () => {
    test('should return 415 when empty args', () => {
      expect(unsupportedMediaType()).toEqual({
        statusCode: 415,
        headers: {},
        body: null,
      });
    });

    test('should return 415 when empty body but headers filled', () => {
      expect(
        unsupportedMediaType(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 415,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 415 when has obect body, no headers', () => {
      expect(unsupportedMediaType({ status: 'success' })).toEqual({
        statusCode: 415,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 415 when has string body, no headers', () => {
      expect(unsupportedMediaType('{"status":"success"}')).toEqual({
        statusCode: 415,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 415 when has obect body & headers', () => {
      expect(
        unsupportedMediaType(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 415,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 415 when has string body & headers', () => {
      expect(
        unsupportedMediaType('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 415,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUnsupportedMediaType', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: 415,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: 415,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: 415,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: 415,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUnsupportedMediaType({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: randomInteger(415),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: randomInteger(415),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: randomInteger(415),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUnsupportedMediaType({
          statusCode: randomInteger(415),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('requestedRangeNotSatisfiable', () => {
    test('should return 416 when empty args', () => {
      expect(requestedRangeNotSatisfiable()).toEqual({
        statusCode: 416,
        headers: {},
        body: null,
      });
    });

    test('should return 416 when empty body but headers filled', () => {
      expect(
        requestedRangeNotSatisfiable(undefined, {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 416,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 416 when has obect body, no headers', () => {
      expect(requestedRangeNotSatisfiable({ status: 'success' })).toEqual({
        statusCode: 416,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 416 when has string body, no headers', () => {
      expect(requestedRangeNotSatisfiable('{"status":"success"}')).toEqual({
        statusCode: 416,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 416 when has obect body & headers', () => {
      expect(
        requestedRangeNotSatisfiable(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 416,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 416 when has string body & headers', () => {
      expect(
        requestedRangeNotSatisfiable('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 416,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isRequestedRangeNotSatisfiable', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: 416,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: 416,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: 416,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: 416,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isRequestedRangeNotSatisfiable({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: randomInteger(416),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: randomInteger(416),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: randomInteger(416),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isRequestedRangeNotSatisfiable({
          statusCode: randomInteger(416),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('expectationFailed', () => {
    test('should return 417 when empty args', () => {
      expect(expectationFailed()).toEqual({
        statusCode: 417,
        headers: {},
        body: null,
      });
    });

    test('should return 417 when empty body but headers filled', () => {
      expect(
        expectationFailed(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 417,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 417 when has obect body, no headers', () => {
      expect(expectationFailed({ status: 'success' })).toEqual({
        statusCode: 417,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 417 when has string body, no headers', () => {
      expect(expectationFailed('{"status":"success"}')).toEqual({
        statusCode: 417,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 417 when has obect body & headers', () => {
      expect(
        expectationFailed(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 417,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 417 when has string body & headers', () => {
      expect(
        expectationFailed('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 417,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isExpectationFailed', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isExpectationFailed({
          statusCode: 417,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isExpectationFailed({
          statusCode: 417,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isExpectationFailed({
          statusCode: 417,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isExpectationFailed({
          statusCode: 417,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isExpectationFailed({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isExpectationFailed({
          statusCode: randomInteger(417),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isExpectationFailed({
          statusCode: randomInteger(417),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isExpectationFailed({
          statusCode: randomInteger(417),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isExpectationFailed({
          statusCode: randomInteger(417),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('imATeapot', () => {
    test('should return 418 when empty args', () => {
      expect(imATeapot()).toEqual({
        statusCode: 418,
        headers: {},
        body: null,
      });
    });

    test('should return 418 when empty body but headers filled', () => {
      expect(imATeapot(undefined, { ContentType: 'application/json' })).toEqual(
        {
          statusCode: 418,
          headers: { ContentType: 'application/json' },
          body: null,
        }
      );
    });

    test('should return 418 when has obect body, no headers', () => {
      expect(imATeapot({ status: 'success' })).toEqual({
        statusCode: 418,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 418 when has string body, no headers', () => {
      expect(imATeapot('{"status":"success"}')).toEqual({
        statusCode: 418,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 418 when has obect body & headers', () => {
      expect(
        imATeapot(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 418,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 418 when has string body & headers', () => {
      expect(
        imATeapot('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 418,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isImATeapot', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isImATeapot({
          statusCode: 418,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isImATeapot({
          statusCode: 418,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isImATeapot({
          statusCode: 418,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isImATeapot({
          statusCode: 418,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isImATeapot({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isImATeapot({
          statusCode: randomInteger(418),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isImATeapot({
          statusCode: randomInteger(418),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isImATeapot({
          statusCode: randomInteger(418),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isImATeapot({
          statusCode: randomInteger(418),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('unprocessableEntity', () => {
    test('should return 422 when empty args', () => {
      expect(unprocessableEntity()).toEqual({
        statusCode: 422,
        headers: {},
        body: null,
      });
    });

    test('should return 422 when empty body but headers filled', () => {
      expect(
        unprocessableEntity(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 422,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 422 when has obect body, no headers', () => {
      expect(unprocessableEntity({ status: 'success' })).toEqual({
        statusCode: 422,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 422 when has string body, no headers', () => {
      expect(unprocessableEntity('{"status":"success"}')).toEqual({
        statusCode: 422,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 422 when has obect body & headers', () => {
      expect(
        unprocessableEntity(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 422,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 422 when has string body & headers', () => {
      expect(
        unprocessableEntity('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 422,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUnprocessableEntity', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUnprocessableEntity({
          statusCode: 422,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUnprocessableEntity({
          statusCode: 422,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUnprocessableEntity({
          statusCode: 422,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUnprocessableEntity({
          statusCode: 422,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUnprocessableEntity({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUnprocessableEntity({
          statusCode: randomInteger(422),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUnprocessableEntity({
          statusCode: randomInteger(422),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUnprocessableEntity({
          statusCode: randomInteger(422),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUnprocessableEntity({
          statusCode: randomInteger(422),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('locked', () => {
    test('should return 423 when empty args', () => {
      expect(locked()).toEqual({
        statusCode: 423,
        headers: {},
        body: null,
      });
    });

    test('should return 423 when empty body but headers filled', () => {
      expect(locked(undefined, { ContentType: 'application/json' })).toEqual({
        statusCode: 423,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 423 when has obect body, no headers', () => {
      expect(locked({ status: 'success' })).toEqual({
        statusCode: 423,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 423 when has string body, no headers', () => {
      expect(locked('{"status":"success"}')).toEqual({
        statusCode: 423,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 423 when has obect body & headers', () => {
      expect(
        locked(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 423,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 423 when has string body & headers', () => {
      expect(
        locked('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 423,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isLocked', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isLocked({
          statusCode: 423,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isLocked({
          statusCode: 423,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isLocked({
          statusCode: 423,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isLocked({
          statusCode: 423,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isLocked({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isLocked({
          statusCode: randomInteger(423),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isLocked({
          statusCode: randomInteger(423),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isLocked({
          statusCode: randomInteger(423),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isLocked({
          statusCode: randomInteger(423),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('failedDependency', () => {
    test('should return 424 when empty args', () => {
      expect(failedDependency()).toEqual({
        statusCode: 424,
        headers: {},
        body: null,
      });
    });

    test('should return 424 when empty body but headers filled', () => {
      expect(
        failedDependency(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 424,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 424 when has obect body, no headers', () => {
      expect(failedDependency({ status: 'success' })).toEqual({
        statusCode: 424,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 424 when has string body, no headers', () => {
      expect(failedDependency('{"status":"success"}')).toEqual({
        statusCode: 424,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 424 when has obect body & headers', () => {
      expect(
        failedDependency(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 424,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 424 when has string body & headers', () => {
      expect(
        failedDependency('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 424,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isFailedDependency', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isFailedDependency({
          statusCode: 424,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isFailedDependency({
          statusCode: 424,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isFailedDependency({
          statusCode: 424,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isFailedDependency({
          statusCode: 424,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isFailedDependency({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isFailedDependency({
          statusCode: randomInteger(424),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isFailedDependency({
          statusCode: randomInteger(424),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isFailedDependency({
          statusCode: randomInteger(424),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isFailedDependency({
          statusCode: randomInteger(424),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('unorderedCollection', () => {
    test('should return 425 when empty args', () => {
      expect(unorderedCollection()).toEqual({
        statusCode: 425,
        headers: {},
        body: null,
      });
    });

    test('should return 425 when empty body but headers filled', () => {
      expect(
        unorderedCollection(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 425,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 425 when has obect body, no headers', () => {
      expect(unorderedCollection({ status: 'success' })).toEqual({
        statusCode: 425,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 425 when has string body, no headers', () => {
      expect(unorderedCollection('{"status":"success"}')).toEqual({
        statusCode: 425,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 425 when has obect body & headers', () => {
      expect(
        unorderedCollection(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 425,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 425 when has string body & headers', () => {
      expect(
        unorderedCollection('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 425,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUnorderedCollection', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUnorderedCollection({
          statusCode: 425,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUnorderedCollection({
          statusCode: 425,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUnorderedCollection({
          statusCode: 425,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUnorderedCollection({
          statusCode: 425,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUnorderedCollection({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUnorderedCollection({
          statusCode: randomInteger(425),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUnorderedCollection({
          statusCode: randomInteger(425),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUnorderedCollection({
          statusCode: randomInteger(425),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUnorderedCollection({
          statusCode: randomInteger(425),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('upgradeRequired', () => {
    test('should return 426 when empty args', () => {
      expect(upgradeRequired()).toEqual({
        statusCode: 426,
        headers: {},
        body: null,
      });
    });

    test('should return 426 when empty body but headers filled', () => {
      expect(
        upgradeRequired(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 426,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 426 when has obect body, no headers', () => {
      expect(upgradeRequired({ status: 'success' })).toEqual({
        statusCode: 426,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 426 when has string body, no headers', () => {
      expect(upgradeRequired('{"status":"success"}')).toEqual({
        statusCode: 426,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 426 when has obect body & headers', () => {
      expect(
        upgradeRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 426,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 426 when has string body & headers', () => {
      expect(
        upgradeRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 426,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isUpgradeRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isUpgradeRequired({
          statusCode: 426,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isUpgradeRequired({
          statusCode: 426,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isUpgradeRequired({
          statusCode: 426,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isUpgradeRequired({
          statusCode: 426,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isUpgradeRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isUpgradeRequired({
          statusCode: randomInteger(426),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isUpgradeRequired({
          statusCode: randomInteger(426),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isUpgradeRequired({
          statusCode: randomInteger(426),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isUpgradeRequired({
          statusCode: randomInteger(426),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('preconditionRequired', () => {
    test('should return 428 when empty args', () => {
      expect(preconditionRequired()).toEqual({
        statusCode: 428,
        headers: {},
        body: null,
      });
    });

    test('should return 428 when empty body but headers filled', () => {
      expect(
        preconditionRequired(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 428,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 428 when has obect body, no headers', () => {
      expect(preconditionRequired({ status: 'success' })).toEqual({
        statusCode: 428,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 428 when has string body, no headers', () => {
      expect(preconditionRequired('{"status":"success"}')).toEqual({
        statusCode: 428,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 428 when has obect body & headers', () => {
      expect(
        preconditionRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 428,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 428 when has string body & headers', () => {
      expect(
        preconditionRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 428,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isPreconditionRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isPreconditionRequired({
          statusCode: 428,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isPreconditionRequired({
          statusCode: 428,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isPreconditionRequired({
          statusCode: 428,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isPreconditionRequired({
          statusCode: 428,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isPreconditionRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isPreconditionRequired({
          statusCode: randomInteger(428),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isPreconditionRequired({
          statusCode: randomInteger(428),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isPreconditionRequired({
          statusCode: randomInteger(428),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isPreconditionRequired({
          statusCode: randomInteger(428),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('tooManyRequests', () => {
    test('should return 429 when empty args', () => {
      expect(tooManyRequests()).toEqual({
        statusCode: 429,
        headers: {},
        body: null,
      });
    });

    test('should return 429 when empty body but headers filled', () => {
      expect(
        tooManyRequests(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 429,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 429 when has obect body, no headers', () => {
      expect(tooManyRequests({ status: 'success' })).toEqual({
        statusCode: 429,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 429 when has string body, no headers', () => {
      expect(tooManyRequests('{"status":"success"}')).toEqual({
        statusCode: 429,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 429 when has obect body & headers', () => {
      expect(
        tooManyRequests(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 429,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 429 when has string body & headers', () => {
      expect(
        tooManyRequests('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 429,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isTooManyRequests', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isTooManyRequests({
          statusCode: 429,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isTooManyRequests({
          statusCode: 429,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isTooManyRequests({
          statusCode: 429,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isTooManyRequests({
          statusCode: 429,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isTooManyRequests({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isTooManyRequests({
          statusCode: randomInteger(429),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isTooManyRequests({
          statusCode: randomInteger(429),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isTooManyRequests({
          statusCode: randomInteger(429),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isTooManyRequests({
          statusCode: randomInteger(429),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('requestHeaderFieldsTooLarge', () => {
    test('should return 431 when empty args', () => {
      expect(requestHeaderFieldsTooLarge()).toEqual({
        statusCode: 431,
        headers: {},
        body: null,
      });
    });

    test('should return 431 when empty body but headers filled', () => {
      expect(
        requestHeaderFieldsTooLarge(undefined, {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 431,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 431 when has obect body, no headers', () => {
      expect(requestHeaderFieldsTooLarge({ status: 'success' })).toEqual({
        statusCode: 431,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 431 when has string body, no headers', () => {
      expect(requestHeaderFieldsTooLarge('{"status":"success"}')).toEqual({
        statusCode: 431,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 431 when has obect body & headers', () => {
      expect(
        requestHeaderFieldsTooLarge(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 431,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 431 when has string body & headers', () => {
      expect(
        requestHeaderFieldsTooLarge('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 431,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isRequestHeaderFieldsTooLarge', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: 431,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: 431,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: 431,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: 431,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isRequestHeaderFieldsTooLarge({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: randomInteger(431),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: randomInteger(431),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: randomInteger(431),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isRequestHeaderFieldsTooLarge({
          statusCode: randomInteger(431),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('internalServerError', () => {
    test('should return 500 when empty args', () => {
      expect(internalServerError()).toEqual({
        statusCode: 500,
        headers: {},
        body: null,
      });
    });

    test('should return 500 when empty body but headers filled', () => {
      expect(
        internalServerError(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 500,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 500 when has obect body, no headers', () => {
      expect(internalServerError({ status: 'success' })).toEqual({
        statusCode: 500,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 500 when has string body, no headers', () => {
      expect(internalServerError('{"status":"success"}')).toEqual({
        statusCode: 500,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 500 when has obect body & headers', () => {
      expect(
        internalServerError(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 500,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 500 when has string body & headers', () => {
      expect(
        internalServerError('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 500,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isInternalServerError', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isInternalServerError({
          statusCode: 500,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isInternalServerError({
          statusCode: 500,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isInternalServerError({
          statusCode: 500,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isInternalServerError({
          statusCode: 500,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isInternalServerError({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isInternalServerError({
          statusCode: randomInteger(500),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isInternalServerError({
          statusCode: randomInteger(500),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isInternalServerError({
          statusCode: randomInteger(500),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isInternalServerError({
          statusCode: randomInteger(500),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('notImplemented', () => {
    test('should return 501 when empty args', () => {
      expect(notImplemented()).toEqual({
        statusCode: 501,
        headers: {},
        body: null,
      });
    });

    test('should return 501 when empty body but headers filled', () => {
      expect(
        notImplemented(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 501,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 501 when has obect body, no headers', () => {
      expect(notImplemented({ status: 'success' })).toEqual({
        statusCode: 501,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 501 when has string body, no headers', () => {
      expect(notImplemented('{"status":"success"}')).toEqual({
        statusCode: 501,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 501 when has obect body & headers', () => {
      expect(
        notImplemented(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 501,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 501 when has string body & headers', () => {
      expect(
        notImplemented('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 501,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNotImplemented', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNotImplemented({
          statusCode: 501,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNotImplemented({
          statusCode: 501,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNotImplemented({
          statusCode: 501,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNotImplemented({
          statusCode: 501,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNotImplemented({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNotImplemented({
          statusCode: randomInteger(501),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNotImplemented({
          statusCode: randomInteger(501),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNotImplemented({
          statusCode: randomInteger(501),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNotImplemented({
          statusCode: randomInteger(501),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('badGateway', () => {
    test('should return 502 when empty args', () => {
      expect(badGateway()).toEqual({
        statusCode: 502,
        headers: {},
        body: null,
      });
    });

    test('should return 502 when empty body but headers filled', () => {
      expect(
        badGateway(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 502,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 502 when has obect body, no headers', () => {
      expect(badGateway({ status: 'success' })).toEqual({
        statusCode: 502,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 502 when has string body, no headers', () => {
      expect(badGateway('{"status":"success"}')).toEqual({
        statusCode: 502,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 502 when has obect body & headers', () => {
      expect(
        badGateway(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 502,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 502 when has string body & headers', () => {
      expect(
        badGateway('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 502,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isBadGateway', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isBadGateway({
          statusCode: 502,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isBadGateway({
          statusCode: 502,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isBadGateway({
          statusCode: 502,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isBadGateway({
          statusCode: 502,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isBadGateway({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isBadGateway({
          statusCode: randomInteger(502),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isBadGateway({
          statusCode: randomInteger(502),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isBadGateway({
          statusCode: randomInteger(502),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isBadGateway({
          statusCode: randomInteger(502),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('serviceUnavailable', () => {
    test('should return 503 when empty args', () => {
      expect(serviceUnavailable()).toEqual({
        statusCode: 503,
        headers: {},
        body: null,
      });
    });

    test('should return 503 when empty body but headers filled', () => {
      expect(
        serviceUnavailable(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 503,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 503 when empty body but headers filled', () => {
      setAutoSerialize(false);
      expect(
        serviceUnavailable(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 503,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 503 when has obect body, no headers', () => {
      expect(serviceUnavailable({ status: 'success' })).toEqual({
        statusCode: 503,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 503 when has string body, no headers', () => {
      expect(serviceUnavailable('{"status":"success"}')).toEqual({
        statusCode: 503,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 503 when has obect body & headers', () => {
      expect(
        serviceUnavailable(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 503,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 503 when has string body & headers', () => {
      expect(
        serviceUnavailable('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 503,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isServiceUnavailable', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isServiceUnavailable({
          statusCode: 503,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isServiceUnavailable({
          statusCode: 503,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isServiceUnavailable({
          statusCode: 503,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isServiceUnavailable({
          statusCode: 503,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isServiceUnavailable({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isServiceUnavailable({
          statusCode: randomInteger(503),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isServiceUnavailable({
          statusCode: randomInteger(503),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isServiceUnavailable({
          statusCode: randomInteger(503),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isServiceUnavailable({
          statusCode: randomInteger(503),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('gatewayTimeOut', () => {
    test('should return 504 when empty args', () => {
      expect(gatewayTimeOut()).toEqual({
        statusCode: 504,
        headers: {},
        body: null,
      });
    });

    test('should return 504 when empty body but headers filled', () => {
      expect(
        gatewayTimeOut(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 504,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 504 when has obect body, no headers', () => {
      expect(gatewayTimeOut({ status: 'success' })).toEqual({
        statusCode: 504,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 504 when has string body, no headers', () => {
      expect(gatewayTimeOut('{"status":"success"}')).toEqual({
        statusCode: 504,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 504 when has obect body & headers', () => {
      expect(
        gatewayTimeOut(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 504,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 504 when has obect body & headers', () => {
      setAutoSerialize(false);
      expect(
        gatewayTimeOut(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 504,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: { status: 'success' },
      });
    });

    test('should return 504 when has string body & headers', () => {
      expect(
        gatewayTimeOut('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 504,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isGatewayTimeOut', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isGatewayTimeOut({
          statusCode: 504,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isGatewayTimeOut({
          statusCode: 504,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isGatewayTimeOut({
          statusCode: 504,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isGatewayTimeOut({
          statusCode: 504,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isGatewayTimeOut({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isGatewayTimeOut({
          statusCode: randomInteger(504),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isGatewayTimeOut({
          statusCode: randomInteger(504),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isGatewayTimeOut({
          statusCode: randomInteger(504),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isGatewayTimeOut({
          statusCode: randomInteger(504),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('httpVersionNotSupported', () => {
    test('should return 505 when empty args', () => {
      expect(httpVersionNotSupported()).toEqual({
        statusCode: 505,
        headers: {},
        body: null,
      });
    });

    test('should return 505 when empty body but headers filled', () => {
      expect(
        httpVersionNotSupported(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 505,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 505 when has obect body, no headers', () => {
      expect(httpVersionNotSupported({ status: 'success' })).toEqual({
        statusCode: 505,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 505 when has string body, no headers', () => {
      expect(httpVersionNotSupported('{"status":"success"}')).toEqual({
        statusCode: 505,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 505 when has obect body & headers', () => {
      expect(
        httpVersionNotSupported(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 505,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 505 when has string body & headers', () => {
      expect(
        httpVersionNotSupported('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 505,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isHttpVersionNotSupported', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: 505,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: 505,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: 505,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: 505,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isHttpVersionNotSupported({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: randomInteger(505),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: randomInteger(505),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: randomInteger(505),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isHttpVersionNotSupported({
          statusCode: randomInteger(505),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('variantAlsoNegotiates', () => {
    test('should return 506 when empty args', () => {
      expect(variantAlsoNegotiates()).toEqual({
        statusCode: 506,
        headers: {},
        body: null,
      });
    });

    test('should return 506 when empty body but headers filled', () => {
      expect(
        variantAlsoNegotiates(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 506,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 506 when has obect body, no headers', () => {
      expect(variantAlsoNegotiates({ status: 'success' })).toEqual({
        statusCode: 506,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 506 when has string body, no headers', () => {
      expect(variantAlsoNegotiates('{"status":"success"}')).toEqual({
        statusCode: 506,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 506 when has obect body & headers', () => {
      expect(
        variantAlsoNegotiates(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 506,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 506 when has string body & headers', () => {
      expect(
        variantAlsoNegotiates('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 506,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isVariantAlsoNegotiates', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: 506,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: 506,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: 506,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: 506,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isVariantAlsoNegotiates({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: randomInteger(506),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: randomInteger(506),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: randomInteger(506),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isVariantAlsoNegotiates({
          statusCode: randomInteger(506),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('insufficientStorage', () => {
    test('should return 507 when empty args', () => {
      expect(insufficientStorage()).toEqual({
        statusCode: 507,
        headers: {},
        body: null,
      });
    });

    test('should return 507 when empty body but headers filled', () => {
      expect(
        insufficientStorage(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 507,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 507 when has obect body, no headers', () => {
      expect(insufficientStorage({ status: 'success' })).toEqual({
        statusCode: 507,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 507 when has string body, no headers', () => {
      expect(insufficientStorage('{"status":"success"}')).toEqual({
        statusCode: 507,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 507 when has obect body & headers', () => {
      expect(
        insufficientStorage(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 507,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 507 when has string body & headers', () => {
      expect(
        insufficientStorage('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 507,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isInsufficientStorage', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isInsufficientStorage({
          statusCode: 507,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isInsufficientStorage({
          statusCode: 507,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isInsufficientStorage({
          statusCode: 507,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isInsufficientStorage({
          statusCode: 507,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isInsufficientStorage({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isInsufficientStorage({
          statusCode: randomInteger(507),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isInsufficientStorage({
          statusCode: randomInteger(507),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isInsufficientStorage({
          statusCode: randomInteger(507),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isInsufficientStorage({
          statusCode: randomInteger(507),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('bandwidthLimitExceeded', () => {
    test('should return 509 when empty args', () => {
      expect(bandwidthLimitExceeded()).toEqual({
        statusCode: 509,
        headers: {},
        body: null,
      });
    });

    test('should return 509 when empty body but headers filled', () => {
      expect(
        bandwidthLimitExceeded(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 509,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 509 when has obect body, no headers', () => {
      expect(bandwidthLimitExceeded({ status: 'success' })).toEqual({
        statusCode: 509,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 509 when has string body, no headers', () => {
      expect(bandwidthLimitExceeded('{"status":"success"}')).toEqual({
        statusCode: 509,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 509 when has obect body & headers', () => {
      expect(
        bandwidthLimitExceeded(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 509,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 509 when has string body & headers', () => {
      expect(
        bandwidthLimitExceeded('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 509,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isBandwidthLimitExceeded', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: 509,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: 509,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: 509,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: 509,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isBandwidthLimitExceeded({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: randomInteger(509),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: randomInteger(509),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: randomInteger(509),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isBandwidthLimitExceeded({
          statusCode: randomInteger(509),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('notExtended', () => {
    test('should return 510 when empty args', () => {
      expect(notExtended()).toEqual({
        statusCode: 510,
        headers: {},
        body: null,
      });
    });

    test('should return 510 when empty body but headers filled', () => {
      expect(
        notExtended(undefined, { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 510,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 510 when has obect body, no headers', () => {
      expect(notExtended({ status: 'success' })).toEqual({
        statusCode: 510,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 510 when has string body, no headers', () => {
      expect(notExtended('{"status":"success"}')).toEqual({
        statusCode: 510,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 510 when has obect body & headers', () => {
      expect(
        notExtended(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 510,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 510 when has string body & headers', () => {
      expect(
        notExtended('{"status":"success"}', { ContentType: 'application/json' })
      ).toEqual({
        statusCode: 510,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNotExtended', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNotExtended({
          statusCode: 510,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNotExtended({
          statusCode: 510,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNotExtended({
          statusCode: 510,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNotExtended({
          statusCode: 510,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNotExtended({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNotExtended({
          statusCode: randomInteger(510),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNotExtended({
          statusCode: randomInteger(510),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNotExtended({
          statusCode: randomInteger(510),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNotExtended({
          statusCode: randomInteger(510),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });

  describe('networkAuthenticationRequired', () => {
    test('should return 511 when empty args', () => {
      expect(networkAuthenticationRequired()).toEqual({
        statusCode: 511,
        headers: {},
        body: null,
      });
    });

    test('should return 511 when empty body but headers filled', () => {
      expect(
        networkAuthenticationRequired(undefined, {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 511,
        headers: { ContentType: 'application/json' },
        body: null,
      });
    });

    test('should return 511 when has obect body, no headers', () => {
      expect(networkAuthenticationRequired({ status: 'success' })).toEqual({
        statusCode: 511,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 511 when has string body, no headers', () => {
      expect(networkAuthenticationRequired('{"status":"success"}')).toEqual({
        statusCode: 511,
        headers: {},
        body: '{"status":"success"}',
      });
    });

    test('should return 511 when has obect body & headers', () => {
      expect(
        networkAuthenticationRequired(
          { status: 'success' },
          {
            ContentType: 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
          }
        )
      ).toEqual({
        statusCode: 511,
        headers: {
          ContentType: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
        },
        body: '{"status":"success"}',
      });
    });

    test('should return 511 when has string body & headers', () => {
      expect(
        networkAuthenticationRequired('{"status":"success"}', {
          ContentType: 'application/json',
        })
      ).toEqual({
        statusCode: 511,
        headers: { ContentType: 'application/json' },
        body: '{"status":"success"}',
      });
    });
  });

  describe('isNetworkAuthenticationRequired', () => {
    test('should be truthy when empty except code', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: 511,
        })
      ).toEqual(true);
    });

    test('should be truthy when body filled, empty headers', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: 511,
          body: '{"status":"success"}',
        })
      ).toEqual(true);
    });

    test('should be truthy when body empty, filled headers', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: 511,
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(true);
    });

    test('should be truthy when fully filled', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: 511,
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(true);
    });

    test('should be falsy when code empty', () => {
      expect(isNetworkAuthenticationRequired({})).toEqual(false);
    });

    test('should be falsy when wrong code', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: randomInteger(511),
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body filled, empty headers', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: randomInteger(511),
          body: '{"status":"success"}',
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + body empty, filled headers', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: randomInteger(511),
          headers: { ContentType: 'application/json' },
        })
      ).toEqual(false);
    });

    test('should be falsy when wrong code + fully filled', () => {
      expect(
        isNetworkAuthenticationRequired({
          statusCode: randomInteger(511),
          body: '{"status":"success"}',
          headers: { 'Accept-Encoding': 'gzip, deflate, br' },
        })
      ).toEqual(false);
    });
  });
});
