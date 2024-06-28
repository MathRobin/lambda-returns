import { OutgoingHttpHeaders } from 'node:http';

let autoSerialize = true;
export function setAutoSerialize(flag: boolean) {
  autoSerialize = flag;
}

export function serializeBody(body?: object): string | object | null {
  return autoSerialize ? JSON.stringify(body ?? {}) : body ?? null;
}

// continue can't be used as it, it's JS reserved word
export type ContinueLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 100;
};

export function httpContinue(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ContinueLambdaResponse {
  return {
    statusCode: 100,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isContinue(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 100;
}

export type SwitchingProtocolsLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 101;
};

export function switchingProtocols(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): SwitchingProtocolsLambdaResponse {
  return {
    statusCode: 101,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isSwitchingProtocols(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 101;
}

export type ProcessingLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 102;
};

export function processing(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ProcessingLambdaResponse {
  return {
    statusCode: 102,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isProcessing(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 102;
}

export type OkLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 200;
};

export function ok(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): OkLambdaResponse {
  return {
    statusCode: 200,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isOk(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 200;
}

export type CreatedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 201;
};

export function created(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): CreatedLambdaResponse {
  return {
    statusCode: 201,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isCreated(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 201;
}

export type AcceptedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 202;
};

export function accepted(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): AcceptedLambdaResponse {
  return {
    statusCode: 202,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isAccepted(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 202;
}

export type NonAuthoritativeInformationLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 203;
};

export function nonAuthoritativeInformation(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NonAuthoritativeInformationLambdaResponse {
  return {
    statusCode: 203,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNonAuthoritativeInformation(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 203;
}

export type NoContentLambdaResponse = {
  headers?: OutgoingHttpHeaders;
  statusCode: 204;
};

export function noContent(
  headers: OutgoingHttpHeaders = {}
): NoContentLambdaResponse {
  return {
    statusCode: 204,
    headers,
  };
}

export function isNoContent(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 204;
}

export type ResetContentLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 205;
};

export function resetContent(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ResetContentLambdaResponse {
  return {
    statusCode: 205,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isResetContent(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 205;
}

export type PartialContentLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 206;
};

export function partialContent(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): PartialContentLambdaResponse {
  return {
    statusCode: 206,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isPartialContent(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 206;
}

export type MultiStatusLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 207;
};

export function multiStatus(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): MultiStatusLambdaResponse {
  return {
    statusCode: 207,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMultiStatus(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 207;
}

export type MultipleChoicesLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 300;
};

export function multipleChoices(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): MultipleChoicesLambdaResponse {
  return {
    statusCode: 300,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMultipleChoices(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 300;
}

export type MovedPermanentlyLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 301;
};

export function movedPermanently(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): MovedPermanentlyLambdaResponse {
  return {
    statusCode: 301,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMovedPermanently(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 301;
}

export type MovedTemporarilyLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 302;
};

export function movedTemporarily(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): MovedTemporarilyLambdaResponse {
  return {
    statusCode: 302,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMovedTemporarily(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 302;
}

export type SeeOtherLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 303;
};

export function seeOther(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): SeeOtherLambdaResponse {
  return {
    statusCode: 303,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isSeeOther(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 303;
}

export type NotModifiedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 304;
};

export function notModified(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NotModifiedLambdaResponse {
  return {
    statusCode: 304,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotModified(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 304;
}

export type UseProxyLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 305;
};

export function useProxy(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UseProxyLambdaResponse {
  return {
    statusCode: 305,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUseProxy(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 305;
}

export type TemporaryRedirectLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 307;
};

export function temporaryRedirect(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): TemporaryRedirectLambdaResponse {
  return {
    statusCode: 307,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isTemporaryRedirect(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 307;
}

export type BadRequestLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 400;
};

export function badRequest(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): BadRequestLambdaResponse {
  return {
    statusCode: 400,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isBadRequest(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 400;
}

export type UnauthorizedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 401;
};

export function unauthorized(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UnauthorizedLambdaResponse {
  return {
    statusCode: 401,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnauthorized(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 401;
}

export type PaymentRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 402;
};

export function paymentRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): PaymentRequiredLambdaResponse {
  return {
    statusCode: 402,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isPaymentRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 402;
}

export type ForbiddenLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 403;
};

export function forbidden(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ForbiddenLambdaResponse {
  return {
    statusCode: 403,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isForbidden(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 403;
}

export type NotFoundLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 404;
};

export function notFound(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NotFoundLambdaResponse {
  return {
    statusCode: 404,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotFound(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 404;
}

export type MethodNotAllowedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 405;
};

export function methodNotAllowed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): MethodNotAllowedLambdaResponse {
  return {
    statusCode: 405,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isMethodNotAllowed(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 405;
}

export type NotAcceptableLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 406;
};

export function notAcceptable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NotAcceptableLambdaResponse {
  return {
    statusCode: 406,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotAcceptable(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 406;
}

export type ProxyAuthenticationRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 407;
};

export function proxyAuthenticationRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ProxyAuthenticationRequiredLambdaResponse {
  return {
    statusCode: 407,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isProxyAuthenticationRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 407;
}

export type RequestTimeOutLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 408;
};

export function requestTimeOut(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): RequestTimeOutLambdaResponse {
  return {
    statusCode: 408,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isRequestTimeOut(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 408;
}

export type ConflictLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 409;
};

export function conflict(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ConflictLambdaResponse {
  return {
    statusCode: 409,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isConflict(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 409;
}

export type GoneLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 410;
};

export function gone(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): GoneLambdaResponse {
  return {
    statusCode: 410,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isGone(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 410;
}

export type LengthRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 411;
};

export function lengthRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): LengthRequiredLambdaResponse {
  return {
    statusCode: 411,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isLengthRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 411;
}

export type PreconditionFailedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 412;
};

export function preconditionFailed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): PreconditionFailedLambdaResponse {
  return {
    statusCode: 412,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isPreconditionFailed(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 412;
}

export type RequestEntityTooLargeLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 413;
};

export function requestEntityTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): RequestEntityTooLargeLambdaResponse {
  return {
    statusCode: 413,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isRequestEntityTooLarge(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 413;
}

export type RequestUriTooLargeLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 414;
};

export function requestUriTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): RequestUriTooLargeLambdaResponse {
  return {
    statusCode: 414,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isRequestUriTooLarge(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 414;
}

export type UnsupportedMediaTypeLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 415;
};

export function unsupportedMediaType(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UnsupportedMediaTypeLambdaResponse {
  return {
    statusCode: 415,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnsupportedMediaType(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 415;
}

export type RequestedRangeNotSatisfiableLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 416;
};

export function requestedRangeNotSatisfiable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): RequestedRangeNotSatisfiableLambdaResponse {
  return {
    statusCode: 416,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isRequestedRangeNotSatisfiable(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 416;
}

export type ExpectationFailedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 417;
};

export function expectationFailed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ExpectationFailedLambdaResponse {
  return {
    statusCode: 417,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isExpectationFailed(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 417;
}

export type ImATeapotLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 418;
};

export function imATeapot(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ImATeapotLambdaResponse {
  return {
    statusCode: 418,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isImATeapot(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 418;
}

export type UnprocessableEntityLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 422;
};

export function unprocessableEntity(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UnprocessableEntityLambdaResponse {
  return {
    statusCode: 422,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnprocessableEntity(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 422;
}

export type LockedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 423;
};

export function locked(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): LockedLambdaResponse {
  return {
    statusCode: 423,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isLocked(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 423;
}

export type FailedDependencyLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 424;
};

export function failedDependency(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): FailedDependencyLambdaResponse {
  return {
    statusCode: 424,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isFailedDependency(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 424;
}

export type UnorderedCollectionLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 425;
};

export function unorderedCollection(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UnorderedCollectionLambdaResponse {
  return {
    statusCode: 425,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnorderedCollection(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 425;
}

export type UpgradeRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 426;
};

export function upgradeRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): UpgradeRequiredLambdaResponse {
  return {
    statusCode: 426,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUpgradeRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 426;
}

export type PreconditionRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 428;
};

export function preconditionRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): PreconditionRequiredLambdaResponse {
  return {
    statusCode: 428,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isPreconditionRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 428;
}

export type TooManyRequestsLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 429;
};

export function tooManyRequests(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): TooManyRequestsLambdaResponse {
  return {
    statusCode: 429,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isTooManyRequests(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 429;
}

export type RequestHeaderFieldsTooLargeLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 431;
};

export function requestHeaderFieldsTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): RequestHeaderFieldsTooLargeLambdaResponse {
  return {
    statusCode: 431,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isRequestHeaderFieldsTooLarge(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 431;
}

export type InternalServerErrorLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 500;
};

export function internalServerError(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): InternalServerErrorLambdaResponse {
  return {
    statusCode: 500,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isInternalServerError(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 500;
}

export type NotImplementedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 501;
};

export function notImplemented(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NotImplementedLambdaResponse {
  return {
    statusCode: 501,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotImplemented(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 501;
}

export type BadGatewayLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 502;
};

export function badGateway(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): BadGatewayLambdaResponse {
  return {
    statusCode: 502,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isBadGateway(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 502;
}

export type ServiceUnavailableLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 503;
};

export function serviceUnavailable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): ServiceUnavailableLambdaResponse {
  return {
    statusCode: 503,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isServiceUnavailable(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 503;
}

export type GatewayTimeOutLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 504;
};

export function gatewayTimeOut(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): GatewayTimeOutLambdaResponse {
  return {
    statusCode: 504,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isGatewayTimeOut(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 504;
}

export type HttpVersionNotSupportedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 505;
};

export function httpVersionNotSupported(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): HttpVersionNotSupportedLambdaResponse {
  return {
    statusCode: 505,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isHttpVersionNotSupported(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 505;
}

export type VariantAlsoNegotiatesLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 506;
};

export function variantAlsoNegotiates(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): VariantAlsoNegotiatesLambdaResponse {
  return {
    statusCode: 506,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isVariantAlsoNegotiates(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 506;
}

export type InsufficientStorageLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 507;
};

export function insufficientStorage(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): InsufficientStorageLambdaResponse {
  return {
    statusCode: 507,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isInsufficientStorage(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 507;
}

export type BandwidthLimitExceededLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 509;
};

export function bandwidthLimitExceeded(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): BandwidthLimitExceededLambdaResponse {
  return {
    statusCode: 509,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isBandwidthLimitExceeded(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 509;
}

export type NotExtendedLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 510;
};

export function notExtended(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NotExtendedLambdaResponse {
  return {
    statusCode: 510,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotExtended(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 510;
}

export type NetworkAuthenticationRequiredLambdaResponse = {
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 511;
};

export function networkAuthenticationRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {}
): NetworkAuthenticationRequiredLambdaResponse {
  return {
    statusCode: 511,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNetworkAuthenticationRequired(response?: {
  [key: string]: unknown;
  statusCode?: number;
}): boolean {
  return response?.statusCode === 511;
}
