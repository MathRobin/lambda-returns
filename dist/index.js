let autoSerialize = true;
function setAutoSerialize(flag) {
  autoSerialize = flag;
}
function serializeBody(body) {
  return autoSerialize ? JSON.stringify(body ?? {}) : body;
}

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

export { accepted, autoSerialize, badGateway, badRequest, bandwidthLimitExceeded, conflict, created, expectationFailed, failedDependency, forbidden, gatewayTimeOut, gone, httpContinue, httpVersionNotSupported, imATeapot, insufficientStorage, internalServerError, isAccepted, isBadGateway, isBadRequest, isBandwidthLimitExceeded, isConflict, isCreated, isExpectationFailed, isFailedDependency, isForbidden, isGatewayTimeOut, isGone, isHttpContinue, isHttpVersionNotSupported, isImATeapot, isInsufficientStorage, isInternalServerError, isLengthRequired, isLocked, isMethodNotAllowed, isMovedPermanently, isMovedTemporarily, isMultiStatus, isMultipleChoices, isNetworkAuthenticationRequired, isNoContent, isNonAuthoritativeInformation, isNotAcceptable, isNotExtended, isNotFound, isNotImplemented, isNotModified, isOk, isPartialContent, isPaymentRequired, isPreconditionFailed, isPreconditionRequired, isProcessing, isProxyAuthenticationRequired, isRequestEntityTooLarge, isRequestHeaderFieldsTooLarge, isRequestTimeOut, isRequestUriTooLarge, isRequestedRangeNotSatisfiable, isResetContent, isSeeOther, isServiceUnavailable, isSwitchingProtocols, isTemporaryRedirect, isTooManyRequests, isUnauthorized, isUnorderedCollection, isUnprocessableEntity, isUnsupportedMediaType, isUpgradeRequired, isUseProxy, isVariantAlsoNegotiates, lengthRequired, locked, methodNotAllowed, movedPermanently, movedTemporarily, multiStatus, multipleChoices, networkAuthenticationRequired, noContent, nonAuthoritativeInformation, notAcceptable, notExtended, notFound, notImplemented, notModified, ok, partialContent, paymentRequired, preconditionFailed, preconditionRequired, processing, proxyAuthenticationRequired, requestEntityTooLarge, requestHeaderFieldsTooLarge, requestTimeOut, requestUriTooLarge, requestedRangeNotSatisfiable, resetContent, seeOther, serializeBody, serviceUnavailable, setAutoSerialize, switchingProtocols, temporaryRedirect, tooManyRequests, unauthorized, unorderedCollection, unprocessableEntity, unsupportedMediaType, upgradeRequired, useProxy, variantAlsoNegotiates };
