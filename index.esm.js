export const switchingProtocols = (result, headers = {}) => ({
    statusCode: 101,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const processing = (result, headers = {}) => ({
    statusCode: 102,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const ok = (result, headers = {}) => ({
    statusCode: 200,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const created = (result, headers = {}) => ({
    statusCode: 201,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const accepted = (result, headers = {}) => ({
    statusCode: 202,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const nonAuthoritativeInformation = (result, headers = {}) => ({
    statusCode: 203,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const noContent = (result, headers = {}) => ({
    statusCode: 204,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const resetContent = (result, headers = {}) => ({
    statusCode: 205,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const partialContent = (result, headers = {}) => ({
    statusCode: 206,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const multiStatus = (result, headers = {}) => ({
    statusCode: 207,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const multipleChoices = (result, headers = {}) => ({
    statusCode: 300,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const movedPermanently = (result, headers = {}) => ({
    statusCode: 301,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const movedTemporarily = (result, headers = {}) => ({
    statusCode: 302,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const seeOther = (result, headers = {}) => ({
    statusCode: 303,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const notModified = (result, headers = {}) => ({
    statusCode: 304,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const useProxy = (result, headers = {}) => ({
    statusCode: 305,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const temporaryRedirect = (result, headers = {}) => ({
    statusCode: 307,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const badRequest = (result, headers = {}) => ({
    statusCode: 400,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const unauthorized = (result, headers = {}) => ({
    statusCode: 401,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const paymentRequired = (result, headers = {}) => ({
    statusCode: 402,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const forbidden = (result, headers = {}) => ({
    statusCode: 403,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const notFound = (result, headers = {}) => ({
    statusCode: 404,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const methodNotAllowed = (result, headers = {}) => ({
    statusCode: 405,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const notAcceptable = (result, headers = {}) => ({
    statusCode: 406,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const proxyAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 407,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const requestTimeOut = (result, headers = {}) => ({
    statusCode: 408,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const conflict = (result, headers = {}) => ({
    statusCode: 409,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const gone = (result, headers = {}) => ({
    statusCode: 410,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const lengthRequired = (result, headers = {}) => ({
    statusCode: 411,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const preconditionFailed = (result, headers = {}) => ({
    statusCode: 412,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const requestEntityTooLarge = (result, headers = {}) => ({
    statusCode: 413,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const requestUriTooLarge = (result, headers = {}) => ({
    statusCode: 414,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const unsupportedMediaType = (result, headers = {}) => ({
    statusCode: 415,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const requestedRangeNotSatisfiable = (result, headers = {}) => ({
    statusCode: 416,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const expectationFailed = (result, headers = {}) => ({
    statusCode: 417,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const imATeapot = (result, headers = {}) => ({
    statusCode: 418,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const unprocessableEntity = (result, headers = {}) => ({
    statusCode: 422,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const locked = (result, headers = {}) => ({
    statusCode: 423,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const failedDependency = (result, headers = {}) => ({
    statusCode: 424,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const unorderedCollection = (result, headers = {}) => ({
    statusCode: 425,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const upgradeRequired = (result, headers = {}) => ({
    statusCode: 426,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const preconditionRequired = (result, headers = {}) => ({
    statusCode: 428,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const tooManyRequests = (result, headers = {}) => ({
    statusCode: 429,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const requestHeaderFieldsTooLarge = (result, headers = {}) => ({
    statusCode: 431,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const internalServerError = (result, headers = {}) => ({
    statusCode: 500,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const notImplemented = (result, headers = {}) => ({
    statusCode: 501,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const badGateway = (result, headers = {}) => ({
    statusCode: 502,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const serviceUnavailable = (result, headers = {}) => ({
    statusCode: 503,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const gatewayTimeOut = (result, headers = {}) => ({
    statusCode: 504,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const httpVersionNotSupported = (result, headers = {}) => ({
    statusCode: 505,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const variantAlsoNegotiates = (result, headers = {}) => ({
    statusCode: 506,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const insufficientStorage = (result, headers = {}) => ({
    statusCode: 507,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const bandwidthLimitExceeded = (result, headers = {}) => ({
    statusCode: 509,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const notExtended = (result, headers = {}) => ({
    statusCode: 510,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

export const networkAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 511,
    headers,
    body: result ? JSON.stringify(result) : null,
  });