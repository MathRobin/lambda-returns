import { OutgoingHttpHeaders } from 'http';
import { APIGatewayProxyResult } from 'aws-lambda';

type HttpHeaders = OutgoingHttpHeaders & {
    [header: string]: string | number | boolean;
};

type LambdaResponse<TCode extends number> = Omit<APIGatewayProxyResult, 'statusCode' | 'headers'> & {
    headers?: HttpHeaders;
    statusCode: TCode;
};

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type AcceptedLambdaResponse = LambdaResponse<202>;
declare function accepted(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): AcceptedLambdaResponse;
declare function isAccepted(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type BadGatewayLambdaResponse = LambdaResponse<502>;
declare function badGateway(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): BadGatewayLambdaResponse;
declare function isBadGateway(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type BadRequestLambdaResponse = LambdaResponse<400>;
declare function badRequest(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): BadRequestLambdaResponse;
declare function isBadRequest(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type BandwidthLimitExceededLambdaResponse = LambdaResponse<509>;
declare function bandwidthLimitExceeded(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): BandwidthLimitExceededLambdaResponse;
declare function isBandwidthLimitExceeded(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ConflictLambdaResponse = LambdaResponse<409>;
declare function conflict(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ConflictLambdaResponse;
declare function isConflict(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type CreatedLambdaResponse = LambdaResponse<201>;
declare function created(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): CreatedLambdaResponse;
declare function isCreated(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ExpectationFailedLambdaResponse = LambdaResponse<417>;
declare function expectationFailed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ExpectationFailedLambdaResponse;
declare function isExpectationFailed(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type FailedDependencyLambdaResponse = LambdaResponse<424>;
declare function failedDependency(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): FailedDependencyLambdaResponse;
declare function isFailedDependency(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ForbiddenLambdaResponse = LambdaResponse<403>;
declare function forbidden(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ForbiddenLambdaResponse;
declare function isForbidden(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type GatewayTimeOutLambdaResponse = LambdaResponse<504>;
declare function gatewayTimeOut(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): GatewayTimeOutLambdaResponse;
declare function isGatewayTimeOut(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type GoneLambdaResponse = LambdaResponse<410>;
declare function gone(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): GoneLambdaResponse;
declare function isGone(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type HttpContinueLambdaResponse = LambdaResponse<100>;
declare function httpContinue(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): HttpContinueLambdaResponse;
declare function isHttpContinue(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type HttpVersionNotSupportedLambdaResponse = LambdaResponse<505>;
declare function httpVersionNotSupported(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): HttpVersionNotSupportedLambdaResponse;
declare function isHttpVersionNotSupported(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ImATeapotLambdaResponse = LambdaResponse<418>;
declare function imATeapot(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ImATeapotLambdaResponse;
declare function isImATeapot(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type InsufficientStorageLambdaResponse = LambdaResponse<507>;
declare function insufficientStorage(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): InsufficientStorageLambdaResponse;
declare function isInsufficientStorage(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type InternalServerErrorLambdaResponse = LambdaResponse<500>;
declare function internalServerError(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): InternalServerErrorLambdaResponse;
declare function isInternalServerError(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type LengthRequiredLambdaResponse = LambdaResponse<411>;
declare function lengthRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): LengthRequiredLambdaResponse;
declare function isLengthRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type LockedLambdaResponse = LambdaResponse<423>;
declare function locked(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): LockedLambdaResponse;
declare function isLocked(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type MethodNotAllowedLambdaResponse = LambdaResponse<405>;
declare function methodNotAllowed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MethodNotAllowedLambdaResponse;
declare function isMethodNotAllowed(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type MovedPermanentlyLambdaResponse = LambdaResponse<301>;
declare function movedPermanently(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MovedPermanentlyLambdaResponse;
declare function isMovedPermanently(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type MovedTemporarilyLambdaResponse = LambdaResponse<302>;
declare function movedTemporarily(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MovedTemporarilyLambdaResponse;
declare function isMovedTemporarily(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type MultiStatusLambdaResponse = LambdaResponse<207>;
declare function multiStatus(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MultiStatusLambdaResponse;
declare function isMultiStatus(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type MultipleChoicesLambdaResponse = LambdaResponse<300>;
declare function multipleChoices(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): MultipleChoicesLambdaResponse;
declare function isMultipleChoices(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NetworkAuthenticationRequiredLambdaResponse = LambdaResponse<511>;
declare function networkAuthenticationRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NetworkAuthenticationRequiredLambdaResponse;
declare function isNetworkAuthenticationRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NoContentLambdaResponse = LambdaResponse<204>;
declare function noContent(headers?: HttpHeaders, isAlreadyBase64?: boolean): NoContentLambdaResponse;
declare function isNoContent(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NonAuthoritativeInformationLambdaResponse = LambdaResponse<203>;
declare function nonAuthoritativeInformation(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NonAuthoritativeInformationLambdaResponse;
declare function isNonAuthoritativeInformation(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NotAcceptableLambdaResponse = LambdaResponse<406>;
declare function notAcceptable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotAcceptableLambdaResponse;
declare function isNotAcceptable(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NotExtendedLambdaResponse = LambdaResponse<510>;
declare function notExtended(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotExtendedLambdaResponse;
declare function isNotExtended(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NotFoundLambdaResponse = LambdaResponse<404>;
declare function notFound(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotFoundLambdaResponse;
declare function isNotFound(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NotImplementedLambdaResponse = LambdaResponse<501>;
declare function notImplemented(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotImplementedLambdaResponse;
declare function isNotImplemented(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type NotModifiedLambdaResponse = LambdaResponse<304>;
declare function notModified(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): NotModifiedLambdaResponse;
declare function isNotModified(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type OkLambdaResponse = LambdaResponse<200>;
declare function ok(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): OkLambdaResponse;
declare function isOk(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type PartialContentLambdaResponse = LambdaResponse<206>;
declare function partialContent(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PartialContentLambdaResponse;
declare function isPartialContent(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type PaymentRequiredLambdaResponse = LambdaResponse<402>;
declare function paymentRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PaymentRequiredLambdaResponse;
declare function isPaymentRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type PreconditionFailedLambdaResponse = LambdaResponse<412>;
declare function preconditionFailed(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PreconditionFailedLambdaResponse;
declare function isPreconditionFailed(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type PreconditionRequiredLambdaResponse = LambdaResponse<428>;
declare function preconditionRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): PreconditionRequiredLambdaResponse;
declare function isPreconditionRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ProcessingLambdaResponse = LambdaResponse<102>;
declare function processing(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ProcessingLambdaResponse;
declare function isProcessing(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ProxyAuthenticationRequiredLambdaResponse = LambdaResponse<407>;
declare function proxyAuthenticationRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ProxyAuthenticationRequiredLambdaResponse;
declare function isProxyAuthenticationRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type RequestEntityTooLargeLambdaResponse = LambdaResponse<413>;
declare function requestEntityTooLarge(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestEntityTooLargeLambdaResponse;
declare function isRequestEntityTooLarge(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type RequestHeaderFieldsTooLargeLambdaResponse = LambdaResponse<431>;
declare function requestHeaderFieldsTooLarge(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestHeaderFieldsTooLargeLambdaResponse;
declare function isRequestHeaderFieldsTooLarge(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type RequestTimeOutLambdaResponse = LambdaResponse<408>;
declare function requestTimeOut(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestTimeOutLambdaResponse;
declare function isRequestTimeOut(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type RequestUriTooLargeLambdaResponse = LambdaResponse<414>;
declare function requestUriTooLarge(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestUriTooLargeLambdaResponse;
declare function isRequestUriTooLarge(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type RequestedRangeNotSatisfiableLambdaResponse = LambdaResponse<416>;
declare function requestedRangeNotSatisfiable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): RequestedRangeNotSatisfiableLambdaResponse;
declare function isRequestedRangeNotSatisfiable(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ResetContentLambdaResponse = LambdaResponse<205>;
declare function resetContent(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ResetContentLambdaResponse;
declare function isResetContent(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type SeeOtherLambdaResponse = LambdaResponse<303>;
declare function seeOther(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): SeeOtherLambdaResponse;
declare function isSeeOther(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type ServiceUnavailableLambdaResponse = LambdaResponse<503>;
declare function serviceUnavailable(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): ServiceUnavailableLambdaResponse;
declare function isServiceUnavailable(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type SwitchingProtocolsLambdaResponse = LambdaResponse<101>;
declare function switchingProtocols(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): SwitchingProtocolsLambdaResponse;
declare function isSwitchingProtocols(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type TemporaryRedirectLambdaResponse = LambdaResponse<307>;
declare function temporaryRedirect(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): TemporaryRedirectLambdaResponse;
declare function isTemporaryRedirect(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type TooManyRequestsLambdaResponse = LambdaResponse<429>;
declare function tooManyRequests(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): TooManyRequestsLambdaResponse;
declare function isTooManyRequests(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UnauthorizedLambdaResponse = LambdaResponse<401>;
declare function unauthorized(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnauthorizedLambdaResponse;
declare function isUnauthorized(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UnorderedCollectionLambdaResponse = LambdaResponse<425>;
declare function unorderedCollection(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnorderedCollectionLambdaResponse;
declare function isUnorderedCollection(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UnprocessableEntityLambdaResponse = LambdaResponse<422>;
declare function unprocessableEntity(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnprocessableEntityLambdaResponse;
declare function isUnprocessableEntity(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UnsupportedMediaTypeLambdaResponse = LambdaResponse<415>;
declare function unsupportedMediaType(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UnsupportedMediaTypeLambdaResponse;
declare function isUnsupportedMediaType(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UpgradeRequiredLambdaResponse = LambdaResponse<426>;
declare function upgradeRequired(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UpgradeRequiredLambdaResponse;
declare function isUpgradeRequired(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type UseProxyLambdaResponse = LambdaResponse<305>;
declare function useProxy(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): UseProxyLambdaResponse;
declare function isUseProxy(response?: Partial<LambdaResponse<number>>): boolean;

/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

type VariantAlsoNegotiatesLambdaResponse = LambdaResponse<506>;
declare function variantAlsoNegotiates(result?: string | object, headers?: HttpHeaders, isAlreadyBase64?: boolean): VariantAlsoNegotiatesLambdaResponse;
declare function isVariantAlsoNegotiates(response?: Partial<LambdaResponse<number>>): boolean;

declare let autoSerialize: boolean;
declare function setAutoSerialize(flag: boolean): void;
declare function serializeBody(body: object): string;

export { type AcceptedLambdaResponse, type BadGatewayLambdaResponse, type BadRequestLambdaResponse, type BandwidthLimitExceededLambdaResponse, type ConflictLambdaResponse, type CreatedLambdaResponse, type ExpectationFailedLambdaResponse, type FailedDependencyLambdaResponse, type ForbiddenLambdaResponse, type GatewayTimeOutLambdaResponse, type GoneLambdaResponse, type HttpContinueLambdaResponse, type HttpHeaders, type HttpVersionNotSupportedLambdaResponse, type ImATeapotLambdaResponse, type InsufficientStorageLambdaResponse, type InternalServerErrorLambdaResponse, type LambdaResponse, type LengthRequiredLambdaResponse, type LockedLambdaResponse, type MethodNotAllowedLambdaResponse, type MovedPermanentlyLambdaResponse, type MovedTemporarilyLambdaResponse, type MultiStatusLambdaResponse, type MultipleChoicesLambdaResponse, type NetworkAuthenticationRequiredLambdaResponse, type NoContentLambdaResponse, type NonAuthoritativeInformationLambdaResponse, type NotAcceptableLambdaResponse, type NotExtendedLambdaResponse, type NotFoundLambdaResponse, type NotImplementedLambdaResponse, type NotModifiedLambdaResponse, type OkLambdaResponse, type PartialContentLambdaResponse, type PaymentRequiredLambdaResponse, type PreconditionFailedLambdaResponse, type PreconditionRequiredLambdaResponse, type ProcessingLambdaResponse, type ProxyAuthenticationRequiredLambdaResponse, type RequestEntityTooLargeLambdaResponse, type RequestHeaderFieldsTooLargeLambdaResponse, type RequestTimeOutLambdaResponse, type RequestUriTooLargeLambdaResponse, type RequestedRangeNotSatisfiableLambdaResponse, type ResetContentLambdaResponse, type SeeOtherLambdaResponse, type ServiceUnavailableLambdaResponse, type SwitchingProtocolsLambdaResponse, type TemporaryRedirectLambdaResponse, type TooManyRequestsLambdaResponse, type UnauthorizedLambdaResponse, type UnorderedCollectionLambdaResponse, type UnprocessableEntityLambdaResponse, type UnsupportedMediaTypeLambdaResponse, type UpgradeRequiredLambdaResponse, type UseProxyLambdaResponse, type VariantAlsoNegotiatesLambdaResponse, accepted, autoSerialize, badGateway, badRequest, bandwidthLimitExceeded, conflict, created, expectationFailed, failedDependency, forbidden, gatewayTimeOut, gone, httpContinue, httpVersionNotSupported, imATeapot, insufficientStorage, internalServerError, isAccepted, isBadGateway, isBadRequest, isBandwidthLimitExceeded, isConflict, isCreated, isExpectationFailed, isFailedDependency, isForbidden, isGatewayTimeOut, isGone, isHttpContinue, isHttpVersionNotSupported, isImATeapot, isInsufficientStorage, isInternalServerError, isLengthRequired, isLocked, isMethodNotAllowed, isMovedPermanently, isMovedTemporarily, isMultiStatus, isMultipleChoices, isNetworkAuthenticationRequired, isNoContent, isNonAuthoritativeInformation, isNotAcceptable, isNotExtended, isNotFound, isNotImplemented, isNotModified, isOk, isPartialContent, isPaymentRequired, isPreconditionFailed, isPreconditionRequired, isProcessing, isProxyAuthenticationRequired, isRequestEntityTooLarge, isRequestHeaderFieldsTooLarge, isRequestTimeOut, isRequestUriTooLarge, isRequestedRangeNotSatisfiable, isResetContent, isSeeOther, isServiceUnavailable, isSwitchingProtocols, isTemporaryRedirect, isTooManyRequests, isUnauthorized, isUnorderedCollection, isUnprocessableEntity, isUnsupportedMediaType, isUpgradeRequired, isUseProxy, isVariantAlsoNegotiates, lengthRequired, locked, methodNotAllowed, movedPermanently, movedTemporarily, multiStatus, multipleChoices, networkAuthenticationRequired, noContent, nonAuthoritativeInformation, notAcceptable, notExtended, notFound, notImplemented, notModified, ok, partialContent, paymentRequired, preconditionFailed, preconditionRequired, processing, proxyAuthenticationRequired, requestEntityTooLarge, requestHeaderFieldsTooLarge, requestTimeOut, requestUriTooLarge, requestedRangeNotSatisfiable, resetContent, seeOther, serializeBody, serviceUnavailable, setAutoSerialize, switchingProtocols, temporaryRedirect, tooManyRequests, unauthorized, unorderedCollection, unprocessableEntity, unsupportedMediaType, upgradeRequired, useProxy, variantAlsoNegotiates };
