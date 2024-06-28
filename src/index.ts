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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 100;
};

export function httpContinue(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ContinueLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 101;
};

export function switchingProtocols(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): SwitchingProtocolsLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 102;
};

export function processing(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ProcessingLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 200;
};

export function ok(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): OkLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 201;
};

export function created(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): CreatedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 202;
};

export function accepted(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): AcceptedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 203;
};

export function nonAuthoritativeInformation(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NonAuthoritativeInformationLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  headers?: OutgoingHttpHeaders;
  statusCode: 204;
};

export function noContent(
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NoContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 205;
};

export function resetContent(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ResetContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 206;
};

export function partialContent(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): PartialContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 207;
};

export function multiStatus(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): MultiStatusLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 300;
};

export function multipleChoices(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): MultipleChoicesLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 301;
};

export function movedPermanently(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): MovedPermanentlyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 302;
};

export function movedTemporarily(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): MovedTemporarilyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 303;
};

export function seeOther(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): SeeOtherLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 304;
};

export function notModified(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotModifiedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 305;
};

export function useProxy(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UseProxyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 307;
};

export function temporaryRedirect(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): TemporaryRedirectLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 400;
};

export function badRequest(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): BadRequestLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 401;
};

export function unauthorized(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnauthorizedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 402;
};

export function paymentRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): PaymentRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 403;
};

export function forbidden(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ForbiddenLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 404;
};

export function notFound(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotFoundLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 405;
};

export function methodNotAllowed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): MethodNotAllowedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 406;
};

export function notAcceptable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotAcceptableLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 407;
};

export function proxyAuthenticationRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ProxyAuthenticationRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 408;
};

export function requestTimeOut(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestTimeOutLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 409;
};

export function conflict(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ConflictLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 410;
};

export function gone(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): GoneLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 411;
};

export function lengthRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): LengthRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 412;
};

export function preconditionFailed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): PreconditionFailedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 413;
};

export function requestEntityTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestEntityTooLargeLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 414;
};

export function requestUriTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestUriTooLargeLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 415;
};

export function unsupportedMediaType(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnsupportedMediaTypeLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 416;
};

export function requestedRangeNotSatisfiable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestedRangeNotSatisfiableLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 417;
};

export function expectationFailed(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ExpectationFailedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 418;
};

export function imATeapot(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ImATeapotLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 422;
};

export function unprocessableEntity(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnprocessableEntityLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 423;
};

export function locked(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): LockedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 424;
};

export function failedDependency(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): FailedDependencyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 425;
};

export function unorderedCollection(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnorderedCollectionLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 426;
};

export function upgradeRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): UpgradeRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 428;
};

export function preconditionRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): PreconditionRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 429;
};

export function tooManyRequests(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): TooManyRequestsLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 431;
};

export function requestHeaderFieldsTooLarge(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): RequestHeaderFieldsTooLargeLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 500;
};

export function internalServerError(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): InternalServerErrorLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 501;
};

export function notImplemented(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotImplementedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 502;
};

export function badGateway(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): BadGatewayLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 503;
};

export function serviceUnavailable(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): ServiceUnavailableLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 504;
};

export function gatewayTimeOut(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): GatewayTimeOutLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 505;
};

export function httpVersionNotSupported(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): HttpVersionNotSupportedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 506;
};

export function variantAlsoNegotiates(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): VariantAlsoNegotiatesLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 507;
};

export function insufficientStorage(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): InsufficientStorageLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 509;
};

export function bandwidthLimitExceeded(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): BandwidthLimitExceededLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 510;
};

export function notExtended(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotExtendedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
  isBase64Encoded: boolean;
  body: string | object | null;
  headers?: OutgoingHttpHeaders;
  statusCode: 511;
};

export function networkAuthenticationRequired(
  result?: string | object,
  headers: OutgoingHttpHeaders = {},
  isAlreadyBase64: boolean = false
): NetworkAuthenticationRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
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
