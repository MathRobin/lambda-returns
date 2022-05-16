module.exports.switchingProtocols = (result, headers = {}) => ({
    statusCode: 101,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.processing = (result, headers = {}) => ({
    statusCode: 102,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.ok = (result, headers = {}) => ({
    statusCode: 200,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.created = (result, headers = {}) => ({
    statusCode: 201,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.accepted = (result, headers = {}) => ({
    statusCode: 202,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.nonAuthoritativeInformation = (result, headers = {}) => ({
    statusCode: 203,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.noContent = (result, headers = {}) => ({
    statusCode: 204,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.resetContent = (result, headers = {}) => ({
    statusCode: 205,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.partialContent = (result, headers = {}) => ({
    statusCode: 206,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.multiStatus = (result, headers = {}) => ({
    statusCode: 207,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.multipleChoices = (result, headers = {}) => ({
    statusCode: 300,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.movedPermanently = (result, headers = {}) => ({
    statusCode: 301,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.movedTemporarily = (result, headers = {}) => ({
    statusCode: 302,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.seeOther = (result, headers = {}) => ({
    statusCode: 303,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.notModified = (result, headers = {}) => ({
    statusCode: 304,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.useProxy = (result, headers = {}) => ({
    statusCode: 305,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.temporaryRedirect = (result, headers = {}) => ({
    statusCode: 307,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.badRequest = (result, headers = {}) => ({
    statusCode: 400,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.unauthorized = (result, headers = {}) => ({
    statusCode: 401,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.paymentRequired = (result, headers = {}) => ({
    statusCode: 402,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.forbidden = (result, headers = {}) => ({
    statusCode: 403,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.notFound = (result, headers = {}) => ({
    statusCode: 404,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.methodNotAllowed = (result, headers = {}) => ({
    statusCode: 405,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.notAcceptable = (result, headers = {}) => ({
    statusCode: 406,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.proxyAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 407,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.requestTimeOut = (result, headers = {}) => ({
    statusCode: 408,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.conflict = (result, headers = {}) => ({
    statusCode: 409,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.gone = (result, headers = {}) => ({
    statusCode: 410,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.lengthRequired = (result, headers = {}) => ({
    statusCode: 411,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.preconditionFailed = (result, headers = {}) => ({
    statusCode: 412,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.requestEntityTooLarge = (result, headers = {}) => ({
    statusCode: 413,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.requestUriTooLarge = (result, headers = {}) => ({
    statusCode: 414,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.unsupportedMediaType = (result, headers = {}) => ({
    statusCode: 415,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.requestedRangeNotSatisfiable = (result, headers = {}) => ({
    statusCode: 416,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.expectationFailed = (result, headers = {}) => ({
    statusCode: 417,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.imATeapot = (result, headers = {}) => ({
    statusCode: 418,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.unprocessableEntity = (result, headers = {}) => ({
    statusCode: 422,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.locked = (result, headers = {}) => ({
    statusCode: 423,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.failedDependency = (result, headers = {}) => ({
    statusCode: 424,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.unorderedCollection = (result, headers = {}) => ({
    statusCode: 425,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.upgradeRequired = (result, headers = {}) => ({
    statusCode: 426,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.preconditionRequired = (result, headers = {}) => ({
    statusCode: 428,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.tooManyRequests = (result, headers = {}) => ({
    statusCode: 429,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.requestHeaderFieldsTooLarge = (result, headers = {}) => ({
    statusCode: 431,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.internalServerError = (result, headers = {}) => ({
    statusCode: 500,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.notImplemented = (result, headers = {}) => ({
    statusCode: 501,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.badGateway = (result, headers = {}) => ({
    statusCode: 502,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.serviceUnavailable = (result, headers = {}) => ({
    statusCode: 503,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.gatewayTimeOut = (result, headers = {}) => ({
    statusCode: 504,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.httpVersionNotSupported = (result, headers = {}) => ({
    statusCode: 505,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.variantAlsoNegotiates = (result, headers = {}) => ({
    statusCode: 506,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.insufficientStorage = (result, headers = {}) => ({
    statusCode: 507,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.bandwidthLimitExceeded = (result, headers = {}) => ({
    statusCode: 509,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.notExtended = (result, headers = {}) => ({
    statusCode: 510,
    headers,
    body: result ? JSON.stringify(result) : null,
  });

module.exports.networkAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 511,
    headers,
    body: result ? JSON.stringify(result) : null,
  });