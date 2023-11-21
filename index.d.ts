export function switchingProtocols<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 101;
  headers: T | {};
  body: string;
};

export function processing<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 102;
  headers: T | {};
  body: string;
};

export function ok<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 200;
  headers: T | {};
  body: string;
};

export function created<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 201;
  headers: T | {};
  body: string;
};

export function accepted<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 202;
  headers: T | {};
  body: string;
};

export function nonAuthoritativeInformation<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 203;
  headers: T | {};
  body: string;
};

export function noContent<T>(headers?: T): {
  statusCode: 204;
  headers: T | {};
};

export function resetContent<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 205;
  headers: T | {};
  body: string;
};

export function partialContent<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 206;
  headers: T | {};
  body: string;
};

export function multiStatus<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 207;
  headers: T | {};
  body: string;
};

export function multipleChoices<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 300;
  headers: T | {};
  body: string;
};

export function movedPermanently<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 301;
  headers: T | {};
  body: string;
};

export function movedTemporarily<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 302;
  headers: T | {};
  body: string;
};

export function seeOther<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 303;
  headers: T | {};
  body: string;
};

export function notModified<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 304;
  headers: T | {};
  body: string;
};

export function useProxy<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 305;
  headers: T | {};
  body: string;
};

export function temporaryRedirect<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 307;
  headers: T | {};
  body: string;
};

export function badRequest<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 400;
  headers: T | {};
  body: string;
};

export function unauthorized<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 401;
  headers: T | {};
  body: string;
};

export function paymentRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 402;
  headers: T | {};
  body: string;
};

export function forbidden<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 403;
  headers: T | {};
  body: string;
};

export function notFound<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 404;
  headers: T | {};
  body: string;
};

export function methodNotAllowed<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 405;
  headers: T | {};
  body: string;
};

export function notAcceptable<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 406;
  headers: T | {};
  body: string;
};

export function proxyAuthenticationRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 407;
  headers: T | {};
  body: string;
};

export function requestTimeOut<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 408;
  headers: T | {};
  body: string;
};

export function conflict<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 409;
  headers: T | {};
  body: string;
};

export function gone<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 410;
  headers: T | {};
  body: string;
};

export function lengthRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 411;
  headers: T | {};
  body: string;
};

export function preconditionFailed<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 412;
  headers: T | {};
  body: string;
};

export function requestEntityTooLarge<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 413;
  headers: T | {};
  body: string;
};

export function requestUriTooLarge<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 414;
  headers: T | {};
  body: string;
};

export function unsupportedMediaType<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 415;
  headers: T | {};
  body: string;
};

export function requestedRangeNotSatisfiable<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 416;
  headers: T | {};
  body: string;
};

export function expectationFailed<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 417;
  headers: T | {};
  body: string;
};

export function imATeapot<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 418;
  headers: T | {};
  body: string;
};

export function unprocessableEntity<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 422;
  headers: T | {};
  body: string;
};

export function locked<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 423;
  headers: T | {};
  body: string;
};

export function failedDependency<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 424;
  headers: T | {};
  body: string;
};

export function unorderedCollection<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 425;
  headers: T | {};
  body: string;
};

export function upgradeRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 426;
  headers: T | {};
  body: string;
};

export function preconditionRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 428;
  headers: T | {};
  body: string;
};

export function tooManyRequests<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 429;
  headers: T | {};
  body: string;
};

export function requestHeaderFieldsTooLarge<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 431;
  headers: T | {};
  body: string;
};

export function internalServerError<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 500;
  headers: T | {};
  body: string;
};

export function notImplemented<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 501;
  headers: T | {};
  body: string;
};

export function badGateway<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 502;
  headers: T | {};
  body: string;
};

export function serviceUnavailable<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 503;
  headers: T | {};
  body: string;
};

export function gatewayTimeOut<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 504;
  headers: T | {};
  body: string;
};

export function httpVersionNotSupported<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 505;
  headers: T | {};
  body: string;
};

export function variantAlsoNegotiates<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 506;
  headers: T | {};
  body: string;
};

export function insufficientStorage<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 507;
  headers: T | {};
  body: string;
};

export function bandwidthLimitExceeded<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 509;
  headers: T | {};
  body: string;
};

export function notExtended<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 510;
  headers: T | {};
  body: string;
};

export function networkAuthenticationRequired<T>(
  result: unknown,
  headers?: T
): {
  statusCode: 511;
  headers: T | {};
  body: string;
};

export function isContinue(response: unknown): boolean;

export function isSwitchingProtocols(response: unknown): boolean;

export function isProcessing(response: unknown): boolean;

export function isOk(response: unknown): boolean;

export function isCreated(response: unknown): boolean;

export function isAccepted(response: unknown): boolean;

export function isNonAuthoritativeInformation(response: unknown): boolean;

export function isNoContent(response: unknown): boolean;

export function isResetContent(response: unknown): boolean;

export function isPartialContent(response: unknown): boolean;

export function isMultiStatus(response: unknown): boolean;

export function isMultipleChoices(response: unknown): boolean;

export function isMovedPermanently(response: unknown): boolean;

export function isMovedTemporarily(response: unknown): boolean;

export function isSeeOther(response: unknown): boolean;

export function isNotModified(response: unknown): boolean;

export function isUseProxy(response: unknown): boolean;

export function isTemporaryRedirect(response: unknown): boolean;

export function isBadRequest(response: unknown): boolean;

export function isUnauthorized(response: unknown): boolean;

export function isPaymentRequired(response: unknown): boolean;

export function isForbidden(response: unknown): boolean;

export function isNotFound(response: unknown): boolean;

export function isMethodNotAllowed(response: unknown): boolean;

export function isNotAcceptable(response: unknown): boolean;

export function isProxyAuthenticationRequired(response: unknown): boolean;

export function isRequestTimeOut(response: unknown): boolean;

export function isConflict(response: unknown): boolean;

export function isGone(response: unknown): boolean;

export function isLengthRequired(response: unknown): boolean;

export function isPreconditionFailed(response: unknown): boolean;

export function isRequestEntityTooLarge(response: unknown): boolean;

export function isRequestUriTooLarge(response: unknown): boolean;

export function isUnsupportedMediaType(response: unknown): boolean;

export function isRequestedRangeNotSatisfiable(response: unknown): boolean;

export function isExpectationFailed(response: unknown): boolean;

export function isImATeapot(response: unknown): boolean;

export function isUnprocessableEntity(response: unknown): boolean;

export function isLocked(response: unknown): boolean;

export function isFailedDependency(response: unknown): boolean;

export function isUnorderedCollection(response: unknown): boolean;

export function isUpgradeRequired(response: unknown): boolean;

export function isPreconditionRequired(response: unknown): boolean;

export function isTooManyRequests(response: unknown): boolean;

export function isRequestHeaderFieldsTooLarge(response: unknown): boolean;

export function isInternalServerError(response: unknown): boolean;

export function isNotImplemented(response: unknown): boolean;

export function isBadGateway(response: unknown): boolean;

export function isServiceUnavailable(response: unknown): boolean;

export function isGatewayTimeOut(response: unknown): boolean;

export function isHttpVersionNotSupported(response: unknown): boolean;

export function isVariantAlsoNegotiates(response: unknown): boolean;

export function isInsufficientStorage(response: unknown): boolean;

export function isBandwidthLimitExceeded(response: unknown): boolean;

export function isNotExtended(response: unknown): boolean;

export function isNetworkAuthenticationRequired(response: unknown): boolean;

export class HEADERS {
  corsBasic: {
    'Access-Control-Allow-Origin': '*';
    'Access-Control-Allow-Credentials': true;
  };
}
