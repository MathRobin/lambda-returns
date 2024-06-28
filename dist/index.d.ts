import { OutgoingHttpHeaders } from 'node:http';

declare function setAutoSerialize(flag: boolean): void;
declare function serializeBody(body?: object): string | object | null;
type ContinueLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 100;
};
declare function httpContinue(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ContinueLambdaResponse;
declare function isContinue(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type SwitchingProtocolsLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 101;
};
declare function switchingProtocols(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): SwitchingProtocolsLambdaResponse;
declare function isSwitchingProtocols(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ProcessingLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 102;
};
declare function processing(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ProcessingLambdaResponse;
declare function isProcessing(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type OkLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 200;
};
declare function ok(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): OkLambdaResponse;
declare function isOk(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type CreatedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 201;
};
declare function created(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): CreatedLambdaResponse;
declare function isCreated(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type AcceptedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 202;
};
declare function accepted(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): AcceptedLambdaResponse;
declare function isAccepted(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NonAuthoritativeInformationLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 203;
};
declare function nonAuthoritativeInformation(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NonAuthoritativeInformationLambdaResponse;
declare function isNonAuthoritativeInformation(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NoContentLambdaResponse = {
    isBase64Encoded: boolean;
    headers?: OutgoingHttpHeaders;
    statusCode: 204;
};
declare function noContent(headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NoContentLambdaResponse;
declare function isNoContent(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ResetContentLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 205;
};
declare function resetContent(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ResetContentLambdaResponse;
declare function isResetContent(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type PartialContentLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 206;
};
declare function partialContent(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): PartialContentLambdaResponse;
declare function isPartialContent(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type MultiStatusLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 207;
};
declare function multiStatus(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): MultiStatusLambdaResponse;
declare function isMultiStatus(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type MultipleChoicesLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 300;
};
declare function multipleChoices(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): MultipleChoicesLambdaResponse;
declare function isMultipleChoices(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type MovedPermanentlyLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 301;
};
declare function movedPermanently(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): MovedPermanentlyLambdaResponse;
declare function isMovedPermanently(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type MovedTemporarilyLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 302;
};
declare function movedTemporarily(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): MovedTemporarilyLambdaResponse;
declare function isMovedTemporarily(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type SeeOtherLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 303;
};
declare function seeOther(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): SeeOtherLambdaResponse;
declare function isSeeOther(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NotModifiedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 304;
};
declare function notModified(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NotModifiedLambdaResponse;
declare function isNotModified(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UseProxyLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 305;
};
declare function useProxy(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UseProxyLambdaResponse;
declare function isUseProxy(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type TemporaryRedirectLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 307;
};
declare function temporaryRedirect(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): TemporaryRedirectLambdaResponse;
declare function isTemporaryRedirect(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type BadRequestLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 400;
};
declare function badRequest(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): BadRequestLambdaResponse;
declare function isBadRequest(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UnauthorizedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 401;
};
declare function unauthorized(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UnauthorizedLambdaResponse;
declare function isUnauthorized(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type PaymentRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 402;
};
declare function paymentRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): PaymentRequiredLambdaResponse;
declare function isPaymentRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ForbiddenLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 403;
};
declare function forbidden(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ForbiddenLambdaResponse;
declare function isForbidden(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NotFoundLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 404;
};
declare function notFound(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NotFoundLambdaResponse;
declare function isNotFound(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type MethodNotAllowedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 405;
};
declare function methodNotAllowed(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): MethodNotAllowedLambdaResponse;
declare function isMethodNotAllowed(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NotAcceptableLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 406;
};
declare function notAcceptable(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NotAcceptableLambdaResponse;
declare function isNotAcceptable(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ProxyAuthenticationRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 407;
};
declare function proxyAuthenticationRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ProxyAuthenticationRequiredLambdaResponse;
declare function isProxyAuthenticationRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type RequestTimeOutLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 408;
};
declare function requestTimeOut(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): RequestTimeOutLambdaResponse;
declare function isRequestTimeOut(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ConflictLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 409;
};
declare function conflict(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ConflictLambdaResponse;
declare function isConflict(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type GoneLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 410;
};
declare function gone(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): GoneLambdaResponse;
declare function isGone(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type LengthRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 411;
};
declare function lengthRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): LengthRequiredLambdaResponse;
declare function isLengthRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type PreconditionFailedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 412;
};
declare function preconditionFailed(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): PreconditionFailedLambdaResponse;
declare function isPreconditionFailed(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type RequestEntityTooLargeLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 413;
};
declare function requestEntityTooLarge(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): RequestEntityTooLargeLambdaResponse;
declare function isRequestEntityTooLarge(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type RequestUriTooLargeLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 414;
};
declare function requestUriTooLarge(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): RequestUriTooLargeLambdaResponse;
declare function isRequestUriTooLarge(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UnsupportedMediaTypeLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 415;
};
declare function unsupportedMediaType(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UnsupportedMediaTypeLambdaResponse;
declare function isUnsupportedMediaType(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type RequestedRangeNotSatisfiableLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 416;
};
declare function requestedRangeNotSatisfiable(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): RequestedRangeNotSatisfiableLambdaResponse;
declare function isRequestedRangeNotSatisfiable(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ExpectationFailedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 417;
};
declare function expectationFailed(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ExpectationFailedLambdaResponse;
declare function isExpectationFailed(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ImATeapotLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 418;
};
declare function imATeapot(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ImATeapotLambdaResponse;
declare function isImATeapot(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UnprocessableEntityLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 422;
};
declare function unprocessableEntity(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UnprocessableEntityLambdaResponse;
declare function isUnprocessableEntity(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type LockedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 423;
};
declare function locked(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): LockedLambdaResponse;
declare function isLocked(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type FailedDependencyLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 424;
};
declare function failedDependency(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): FailedDependencyLambdaResponse;
declare function isFailedDependency(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UnorderedCollectionLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 425;
};
declare function unorderedCollection(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UnorderedCollectionLambdaResponse;
declare function isUnorderedCollection(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type UpgradeRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 426;
};
declare function upgradeRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): UpgradeRequiredLambdaResponse;
declare function isUpgradeRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type PreconditionRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 428;
};
declare function preconditionRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): PreconditionRequiredLambdaResponse;
declare function isPreconditionRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type TooManyRequestsLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 429;
};
declare function tooManyRequests(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): TooManyRequestsLambdaResponse;
declare function isTooManyRequests(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type RequestHeaderFieldsTooLargeLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 431;
};
declare function requestHeaderFieldsTooLarge(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): RequestHeaderFieldsTooLargeLambdaResponse;
declare function isRequestHeaderFieldsTooLarge(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type InternalServerErrorLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 500;
};
declare function internalServerError(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): InternalServerErrorLambdaResponse;
declare function isInternalServerError(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NotImplementedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 501;
};
declare function notImplemented(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NotImplementedLambdaResponse;
declare function isNotImplemented(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type BadGatewayLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 502;
};
declare function badGateway(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): BadGatewayLambdaResponse;
declare function isBadGateway(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type ServiceUnavailableLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 503;
};
declare function serviceUnavailable(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): ServiceUnavailableLambdaResponse;
declare function isServiceUnavailable(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type GatewayTimeOutLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 504;
};
declare function gatewayTimeOut(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): GatewayTimeOutLambdaResponse;
declare function isGatewayTimeOut(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type HttpVersionNotSupportedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 505;
};
declare function httpVersionNotSupported(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): HttpVersionNotSupportedLambdaResponse;
declare function isHttpVersionNotSupported(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type VariantAlsoNegotiatesLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 506;
};
declare function variantAlsoNegotiates(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): VariantAlsoNegotiatesLambdaResponse;
declare function isVariantAlsoNegotiates(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type InsufficientStorageLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 507;
};
declare function insufficientStorage(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): InsufficientStorageLambdaResponse;
declare function isInsufficientStorage(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type BandwidthLimitExceededLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 509;
};
declare function bandwidthLimitExceeded(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): BandwidthLimitExceededLambdaResponse;
declare function isBandwidthLimitExceeded(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NotExtendedLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 510;
};
declare function notExtended(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NotExtendedLambdaResponse;
declare function isNotExtended(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;
type NetworkAuthenticationRequiredLambdaResponse = {
    isBase64Encoded: boolean;
    body: string | object | null;
    headers?: OutgoingHttpHeaders;
    statusCode: 511;
};
declare function networkAuthenticationRequired(result?: string | object, headers?: OutgoingHttpHeaders, isAlreadyBase64?: boolean): NetworkAuthenticationRequiredLambdaResponse;
declare function isNetworkAuthenticationRequired(response?: {
    [key: string]: unknown;
    statusCode?: number;
}): boolean;

export { type AcceptedLambdaResponse, type BadGatewayLambdaResponse, type BadRequestLambdaResponse, type BandwidthLimitExceededLambdaResponse, type ConflictLambdaResponse, type ContinueLambdaResponse, type CreatedLambdaResponse, type ExpectationFailedLambdaResponse, type FailedDependencyLambdaResponse, type ForbiddenLambdaResponse, type GatewayTimeOutLambdaResponse, type GoneLambdaResponse, type HttpVersionNotSupportedLambdaResponse, type ImATeapotLambdaResponse, type InsufficientStorageLambdaResponse, type InternalServerErrorLambdaResponse, type LengthRequiredLambdaResponse, type LockedLambdaResponse, type MethodNotAllowedLambdaResponse, type MovedPermanentlyLambdaResponse, type MovedTemporarilyLambdaResponse, type MultiStatusLambdaResponse, type MultipleChoicesLambdaResponse, type NetworkAuthenticationRequiredLambdaResponse, type NoContentLambdaResponse, type NonAuthoritativeInformationLambdaResponse, type NotAcceptableLambdaResponse, type NotExtendedLambdaResponse, type NotFoundLambdaResponse, type NotImplementedLambdaResponse, type NotModifiedLambdaResponse, type OkLambdaResponse, type PartialContentLambdaResponse, type PaymentRequiredLambdaResponse, type PreconditionFailedLambdaResponse, type PreconditionRequiredLambdaResponse, type ProcessingLambdaResponse, type ProxyAuthenticationRequiredLambdaResponse, type RequestEntityTooLargeLambdaResponse, type RequestHeaderFieldsTooLargeLambdaResponse, type RequestTimeOutLambdaResponse, type RequestUriTooLargeLambdaResponse, type RequestedRangeNotSatisfiableLambdaResponse, type ResetContentLambdaResponse, type SeeOtherLambdaResponse, type ServiceUnavailableLambdaResponse, type SwitchingProtocolsLambdaResponse, type TemporaryRedirectLambdaResponse, type TooManyRequestsLambdaResponse, type UnauthorizedLambdaResponse, type UnorderedCollectionLambdaResponse, type UnprocessableEntityLambdaResponse, type UnsupportedMediaTypeLambdaResponse, type UpgradeRequiredLambdaResponse, type UseProxyLambdaResponse, type VariantAlsoNegotiatesLambdaResponse, accepted, badGateway, badRequest, bandwidthLimitExceeded, conflict, created, expectationFailed, failedDependency, forbidden, gatewayTimeOut, gone, httpContinue, httpVersionNotSupported, imATeapot, insufficientStorage, internalServerError, isAccepted, isBadGateway, isBadRequest, isBandwidthLimitExceeded, isConflict, isContinue, isCreated, isExpectationFailed, isFailedDependency, isForbidden, isGatewayTimeOut, isGone, isHttpVersionNotSupported, isImATeapot, isInsufficientStorage, isInternalServerError, isLengthRequired, isLocked, isMethodNotAllowed, isMovedPermanently, isMovedTemporarily, isMultiStatus, isMultipleChoices, isNetworkAuthenticationRequired, isNoContent, isNonAuthoritativeInformation, isNotAcceptable, isNotExtended, isNotFound, isNotImplemented, isNotModified, isOk, isPartialContent, isPaymentRequired, isPreconditionFailed, isPreconditionRequired, isProcessing, isProxyAuthenticationRequired, isRequestEntityTooLarge, isRequestHeaderFieldsTooLarge, isRequestTimeOut, isRequestUriTooLarge, isRequestedRangeNotSatisfiable, isResetContent, isSeeOther, isServiceUnavailable, isSwitchingProtocols, isTemporaryRedirect, isTooManyRequests, isUnauthorized, isUnorderedCollection, isUnprocessableEntity, isUnsupportedMediaType, isUpgradeRequired, isUseProxy, isVariantAlsoNegotiates, lengthRequired, locked, methodNotAllowed, movedPermanently, movedTemporarily, multiStatus, multipleChoices, networkAuthenticationRequired, noContent, nonAuthoritativeInformation, notAcceptable, notExtended, notFound, notImplemented, notModified, ok, partialContent, paymentRequired, preconditionFailed, preconditionRequired, processing, proxyAuthenticationRequired, requestEntityTooLarge, requestHeaderFieldsTooLarge, requestTimeOut, requestUriTooLarge, requestedRangeNotSatisfiable, resetContent, seeOther, serializeBody, serviceUnavailable, setAutoSerialize, switchingProtocols, temporaryRedirect, tooManyRequests, unauthorized, unorderedCollection, unprocessableEntity, unsupportedMediaType, upgradeRequired, useProxy, variantAlsoNegotiates };
