// src/serialization.ts
var autoSerialize = true;
function setAutoSerialize(flag) {
  autoSerialize = flag;
}
function serializeBody(body) {
  return autoSerialize ? JSON.stringify(body ?? {}) : body;
}

// src/gen/res/accepted.ts
function accepted(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 202,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isAccepted(response) {
  return response?.statusCode === 202;
}

// src/gen/res/badGateway.ts
function badGateway(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 502,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isBadGateway(response) {
  return response?.statusCode === 502;
}

// src/gen/res/badRequest.ts
function badRequest(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 400,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isBadRequest(response) {
  return response?.statusCode === 400;
}

// src/gen/res/bandwidthLimitExceeded.ts
function bandwidthLimitExceeded(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 509,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isBandwidthLimitExceeded(response) {
  return response?.statusCode === 509;
}

// src/gen/res/conflict.ts
function conflict(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 409,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isConflict(response) {
  return response?.statusCode === 409;
}

// src/gen/res/created.ts
function created(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 201,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isCreated(response) {
  return response?.statusCode === 201;
}

// src/gen/res/expectationFailed.ts
function expectationFailed(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 417,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isExpectationFailed(response) {
  return response?.statusCode === 417;
}

// src/gen/res/failedDependency.ts
function failedDependency(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 424,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isFailedDependency(response) {
  return response?.statusCode === 424;
}

// src/gen/res/forbidden.ts
function forbidden(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 403,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isForbidden(response) {
  return response?.statusCode === 403;
}

// src/gen/res/gatewayTimeOut.ts
function gatewayTimeOut(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 504,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isGatewayTimeOut(response) {
  return response?.statusCode === 504;
}

// src/gen/res/gone.ts
function gone(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 410,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isGone(response) {
  return response?.statusCode === 410;
}

// src/gen/res/httpContinue.ts
function httpContinue(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 100,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isHttpContinue(response) {
  return response?.statusCode === 100;
}

// src/gen/res/httpVersionNotSupported.ts
function httpVersionNotSupported(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 505,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isHttpVersionNotSupported(response) {
  return response?.statusCode === 505;
}

// src/gen/res/imATeapot.ts
function imATeapot(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 418,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isImATeapot(response) {
  return response?.statusCode === 418;
}

// src/gen/res/insufficientStorage.ts
function insufficientStorage(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 507,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isInsufficientStorage(response) {
  return response?.statusCode === 507;
}

// src/gen/res/internalServerError.ts
function internalServerError(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 500,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isInternalServerError(response) {
  return response?.statusCode === 500;
}

// src/gen/res/lengthRequired.ts
function lengthRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 411,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isLengthRequired(response) {
  return response?.statusCode === 411;
}

// src/gen/res/locked.ts
function locked(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 423,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isLocked(response) {
  return response?.statusCode === 423;
}

// src/gen/res/methodNotAllowed.ts
function methodNotAllowed(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 405,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isMethodNotAllowed(response) {
  return response?.statusCode === 405;
}

// src/gen/res/movedPermanently.ts
function movedPermanently(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 301,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isMovedPermanently(response) {
  return response?.statusCode === 301;
}

// src/gen/res/movedTemporarily.ts
function movedTemporarily(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 302,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isMovedTemporarily(response) {
  return response?.statusCode === 302;
}

// src/gen/res/multiStatus.ts
function multiStatus(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 207,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isMultiStatus(response) {
  return response?.statusCode === 207;
}

// src/gen/res/multipleChoices.ts
function multipleChoices(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 300,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isMultipleChoices(response) {
  return response?.statusCode === 300;
}

// src/gen/res/networkAuthenticationRequired.ts
function networkAuthenticationRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 511,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNetworkAuthenticationRequired(response) {
  return response?.statusCode === 511;
}

// src/gen/res/noContent.ts
function noContent(headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 204,
    headers,
    body: ""
  };
}
function isNoContent(response) {
  return response?.statusCode === 204;
}

// src/gen/res/nonAuthoritativeInformation.ts
function nonAuthoritativeInformation(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 203,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNonAuthoritativeInformation(response) {
  return response?.statusCode === 203;
}

// src/gen/res/notAcceptable.ts
function notAcceptable(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 406,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNotAcceptable(response) {
  return response?.statusCode === 406;
}

// src/gen/res/notExtended.ts
function notExtended(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 510,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNotExtended(response) {
  return response?.statusCode === 510;
}

// src/gen/res/notFound.ts
function notFound(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 404,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNotFound(response) {
  return response?.statusCode === 404;
}

// src/gen/res/notImplemented.ts
function notImplemented(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 501,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNotImplemented(response) {
  return response?.statusCode === 501;
}

// src/gen/res/notModified.ts
function notModified(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 304,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isNotModified(response) {
  return response?.statusCode === 304;
}

// src/gen/res/ok.ts
function ok(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 200,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isOk(response) {
  return response?.statusCode === 200;
}

// src/gen/res/partialContent.ts
function partialContent(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 206,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isPartialContent(response) {
  return response?.statusCode === 206;
}

// src/gen/res/paymentRequired.ts
function paymentRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 402,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isPaymentRequired(response) {
  return response?.statusCode === 402;
}

// src/gen/res/preconditionFailed.ts
function preconditionFailed(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 412,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isPreconditionFailed(response) {
  return response?.statusCode === 412;
}

// src/gen/res/preconditionRequired.ts
function preconditionRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 428,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isPreconditionRequired(response) {
  return response?.statusCode === 428;
}

// src/gen/res/processing.ts
function processing(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 102,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isProcessing(response) {
  return response?.statusCode === 102;
}

// src/gen/res/proxyAuthenticationRequired.ts
function proxyAuthenticationRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 407,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isProxyAuthenticationRequired(response) {
  return response?.statusCode === 407;
}

// src/gen/res/requestEntityTooLarge.ts
function requestEntityTooLarge(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 413,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isRequestEntityTooLarge(response) {
  return response?.statusCode === 413;
}

// src/gen/res/requestHeaderFieldsTooLarge.ts
function requestHeaderFieldsTooLarge(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 431,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isRequestHeaderFieldsTooLarge(response) {
  return response?.statusCode === 431;
}

// src/gen/res/requestTimeOut.ts
function requestTimeOut(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 408,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isRequestTimeOut(response) {
  return response?.statusCode === 408;
}

// src/gen/res/requestUriTooLarge.ts
function requestUriTooLarge(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 414,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isRequestUriTooLarge(response) {
  return response?.statusCode === 414;
}

// src/gen/res/requestedRangeNotSatisfiable.ts
function requestedRangeNotSatisfiable(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 416,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isRequestedRangeNotSatisfiable(response) {
  return response?.statusCode === 416;
}

// src/gen/res/resetContent.ts
function resetContent(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 205,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isResetContent(response) {
  return response?.statusCode === 205;
}

// src/gen/res/seeOther.ts
function seeOther(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 303,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isSeeOther(response) {
  return response?.statusCode === 303;
}

// src/gen/res/serviceUnavailable.ts
function serviceUnavailable(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 503,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isServiceUnavailable(response) {
  return response?.statusCode === 503;
}

// src/gen/res/switchingProtocols.ts
function switchingProtocols(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 101,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isSwitchingProtocols(response) {
  return response?.statusCode === 101;
}

// src/gen/res/temporaryRedirect.ts
function temporaryRedirect(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 307,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isTemporaryRedirect(response) {
  return response?.statusCode === 307;
}

// src/gen/res/tooManyRequests.ts
function tooManyRequests(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 429,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isTooManyRequests(response) {
  return response?.statusCode === 429;
}

// src/gen/res/unauthorized.ts
function unauthorized(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 401,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUnauthorized(response) {
  return response?.statusCode === 401;
}

// src/gen/res/unorderedCollection.ts
function unorderedCollection(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 425,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUnorderedCollection(response) {
  return response?.statusCode === 425;
}

// src/gen/res/unprocessableEntity.ts
function unprocessableEntity(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 422,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUnprocessableEntity(response) {
  return response?.statusCode === 422;
}

// src/gen/res/unsupportedMediaType.ts
function unsupportedMediaType(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 415,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUnsupportedMediaType(response) {
  return response?.statusCode === 415;
}

// src/gen/res/upgradeRequired.ts
function upgradeRequired(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 426,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUpgradeRequired(response) {
  return response?.statusCode === 426;
}

// src/gen/res/useProxy.ts
function useProxy(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 305,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isUseProxy(response) {
  return response?.statusCode === 305;
}

// src/gen/res/variantAlsoNegotiates.ts
function variantAlsoNegotiates(result, headers = {}, isAlreadyBase64 = false) {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 506,
    headers,
    body: result ? typeof result === "string" ? result : serializeBody(result) : ""
  };
}
function isVariantAlsoNegotiates(response) {
  return response?.statusCode === 506;
}
export {
  accepted,
  autoSerialize,
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
  isCreated,
  isExpectationFailed,
  isFailedDependency,
  isForbidden,
  isGatewayTimeOut,
  isGone,
  isHttpContinue,
  isHttpVersionNotSupported,
  isImATeapot,
  isInsufficientStorage,
  isInternalServerError,
  isLengthRequired,
  isLocked,
  isMethodNotAllowed,
  isMovedPermanently,
  isMovedTemporarily,
  isMultiStatus,
  isMultipleChoices,
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
  isRequestEntityTooLarge,
  isRequestHeaderFieldsTooLarge,
  isRequestTimeOut,
  isRequestUriTooLarge,
  isRequestedRangeNotSatisfiable,
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
  multiStatus,
  multipleChoices,
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
  requestEntityTooLarge,
  requestHeaderFieldsTooLarge,
  requestTimeOut,
  requestUriTooLarge,
  requestedRangeNotSatisfiable,
  resetContent,
  seeOther,
  serializeBody,
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
  variantAlsoNegotiates
};
