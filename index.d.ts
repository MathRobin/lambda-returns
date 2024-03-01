export class HttpHeaders {
  'Access-Control-Allow-Origin'?: '*' | string;
  'Access-Control-Allow-Credentials'?: boolean;
  Accept?: 'application/json' | 'text/html' | 'image/*' | '*/*' | string;
  'Content-Type'?:
    | 'text/html'
    | 'text/html; charset=utf-8'
    | 'multipart/form-data'
    | string;
  Connection?: 'open' | 'close';
  Date?: string;
  ETag?: string;
}

export function switchingProtocols(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 101;
  headers: HttpHeaders;
  body: string;
};

export function processing(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 102;
  headers: HttpHeaders;
  body: string;
};

export function ok(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 200;
  headers: HttpHeaders;
  body: string;
};

export function created(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 201;
  headers: HttpHeaders;
  body: string;
};

export function accepted(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 202;
  headers: HttpHeaders;
  body: string;
};

export function nonAuthoritativeInformation(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 203;
  headers: HttpHeaders;
  body: string;
};

export function noContent(headers?: HttpHeaders): {
  statusCode: 204;
  headers: HttpHeaders;
};

export function resetContent(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 205;
  headers: HttpHeaders;
  body: string;
};

export function partialContent(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 206;
  headers: HttpHeaders;
  body: string;
};

export function multiStatus(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 207;
  headers: HttpHeaders;
  body: string;
};

export function multipleChoices(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 300;
  headers: HttpHeaders;
  body: string;
};

export function movedPermanently(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 301;
  headers: HttpHeaders;
  body: string;
};

export function movedTemporarily(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 302;
  headers: HttpHeaders;
  body: string;
};

export function seeOther(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 303;
  headers: HttpHeaders;
  body: string;
};

export function notModified(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 304;
  headers: HttpHeaders;
  body: string;
};

export function useProxy(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 305;
  headers: HttpHeaders;
  body: string;
};

export function temporaryRedirect(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 307;
  headers: HttpHeaders;
  body: string;
};

export function badRequest(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 400;
  headers: HttpHeaders;
  body: string;
};

export function unauthorized(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 401;
  headers: HttpHeaders;
  body: string;
};

export function paymentRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 402;
  headers: HttpHeaders;
  body: string;
};

export function forbidden(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 403;
  headers: HttpHeaders;
  body: string;
};

export function notFound(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 404;
  headers: HttpHeaders;
  body: string;
};

export function methodNotAllowed(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 405;
  headers: HttpHeaders;
  body: string;
};

export function notAcceptable(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 406;
  headers: HttpHeaders;
  body: string;
};

export function proxyAuthenticationRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 407;
  headers: HttpHeaders;
  body: string;
};

export function requestTimeOut(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 408;
  headers: HttpHeaders;
  body: string;
};

export function conflict(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 409;
  headers: HttpHeaders;
  body: string;
};

export function gone(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 410;
  headers: HttpHeaders;
  body: string;
};

export function lengthRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 411;
  headers: HttpHeaders;
  body: string;
};

export function preconditionFailed(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 412;
  headers: HttpHeaders;
  body: string;
};

export function requestEntityTooLarge(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 413;
  headers: HttpHeaders;
  body: string;
};

export function requestUriTooLarge(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 414;
  headers: HttpHeaders;
  body: string;
};

export function unsupportedMediaType(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 415;
  headers: HttpHeaders;
  body: string;
};

export function requestedRangeNotSatisfiable(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 416;
  headers: HttpHeaders;
  body: string;
};

export function expectationFailed(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 417;
  headers: HttpHeaders;
  body: string;
};

export function imATeapot(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 418;
  headers: HttpHeaders;
  body: string;
};

export function unprocessableEntity(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 422;
  headers: HttpHeaders;
  body: string;
};

export function locked(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 423;
  headers: HttpHeaders;
  body: string;
};

export function failedDependency(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 424;
  headers: HttpHeaders;
  body: string;
};

export function unorderedCollection(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 425;
  headers: HttpHeaders;
  body: string;
};

export function upgradeRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 426;
  headers: HttpHeaders;
  body: string;
};

export function preconditionRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 428;
  headers: HttpHeaders;
  body: string;
};

export function tooManyRequests(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 429;
  headers: HttpHeaders;
  body: string;
};

export function requestHeaderFieldsTooLarge(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 431;
  headers: HttpHeaders;
  body: string;
};

export function internalServerError(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 500;
  headers: HttpHeaders;
  body: string;
};

export function notImplemented(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 501;
  headers: HttpHeaders;
  body: string;
};

export function badGateway(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 502;
  headers: HttpHeaders;
  body: string;
};

export function serviceUnavailable(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 503;
  headers: HttpHeaders;
  body: string;
};

export function gatewayTimeOut(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 504;
  headers: HttpHeaders;
  body: string;
};

export function httpVersionNotSupported(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 505;
  headers: HttpHeaders;
  body: string;
};

export function variantAlsoNegotiates(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 506;
  headers: HttpHeaders;
  body: string;
};

export function insufficientStorage(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 507;
  headers: HttpHeaders;
  body: string;
};

export function bandwidthLimitExceeded(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 509;
  headers: HttpHeaders;
  body: string;
};

export function notExtended(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 510;
  headers: HttpHeaders;
  body: string;
};

export function networkAuthenticationRequired(
  result?: unknown,
  headers?: HttpHeaders
): {
  statusCode: 511;
  headers: HttpHeaders;
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
