export const switchingProtocols = (result, headers = {}) => ({
    statusCode: 101,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const processing = (result, headers = {}) => ({
    statusCode: 102,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const ok = (result, headers = {}) => ({
    statusCode: 200,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const created = (result, headers = {}) => ({
    statusCode: 201,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const accepted = (result, headers = {}) => ({
    statusCode: 202,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const nonAuthoritativeInformation = (result, headers = {}) => ({
    statusCode: 203,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const noContent = (result, headers = {}) => ({
    statusCode: 204,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const resetContent = (result, headers = {}) => ({
    statusCode: 205,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const partialContent = (result, headers = {}) => ({
    statusCode: 206,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const multiStatus = (result, headers = {}) => ({
    statusCode: 207,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const multipleChoices = (result, headers = {}) => ({
    statusCode: 300,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const movedPermanently = (result, headers = {}) => ({
    statusCode: 301,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const movedTemporarily = (result, headers = {}) => ({
    statusCode: 302,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const seeOther = (result, headers = {}) => ({
    statusCode: 303,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const notModified = (result, headers = {}) => ({
    statusCode: 304,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const useProxy = (result, headers = {}) => ({
    statusCode: 305,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const temporaryRedirect = (result, headers = {}) => ({
    statusCode: 307,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const badRequest = (result, headers = {}) => ({
    statusCode: 400,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const unauthorized = (result, headers = {}) => ({
    statusCode: 401,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const paymentRequired = (result, headers = {}) => ({
    statusCode: 402,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const forbidden = (result, headers = {}) => ({
    statusCode: 403,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const notFound = (result, headers = {}) => ({
    statusCode: 404,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const methodNotAllowed = (result, headers = {}) => ({
    statusCode: 405,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const notAcceptable = (result, headers = {}) => ({
    statusCode: 406,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const proxyAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 407,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const requestTimeOut = (result, headers = {}) => ({
    statusCode: 408,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const conflict = (result, headers = {}) => ({
    statusCode: 409,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const gone = (result, headers = {}) => ({
    statusCode: 410,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const lengthRequired = (result, headers = {}) => ({
    statusCode: 411,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const preconditionFailed = (result, headers = {}) => ({
    statusCode: 412,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const requestEntityTooLarge = (result, headers = {}) => ({
    statusCode: 413,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const requestUriTooLarge = (result, headers = {}) => ({
    statusCode: 414,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const unsupportedMediaType = (result, headers = {}) => ({
    statusCode: 415,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const requestedRangeNotSatisfiable = (result, headers = {}) => ({
    statusCode: 416,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const expectationFailed = (result, headers = {}) => ({
    statusCode: 417,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const imATeapot = (result, headers = {}) => ({
    statusCode: 418,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const unprocessableEntity = (result, headers = {}) => ({
    statusCode: 422,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const locked = (result, headers = {}) => ({
    statusCode: 423,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const failedDependency = (result, headers = {}) => ({
    statusCode: 424,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const unorderedCollection = (result, headers = {}) => ({
    statusCode: 425,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const upgradeRequired = (result, headers = {}) => ({
    statusCode: 426,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const preconditionRequired = (result, headers = {}) => ({
    statusCode: 428,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const tooManyRequests = (result, headers = {}) => ({
    statusCode: 429,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const requestHeaderFieldsTooLarge = (result, headers = {}) => ({
    statusCode: 431,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const internalServerError = (result, headers = {}) => ({
    statusCode: 500,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const notImplemented = (result, headers = {}) => ({
    statusCode: 501,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const badGateway = (result, headers = {}) => ({
    statusCode: 502,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const serviceUnavailable = (result, headers = {}) => ({
    statusCode: 503,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const gatewayTimeOut = (result, headers = {}) => ({
    statusCode: 504,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const httpVersionNotSupported = (result, headers = {}) => ({
    statusCode: 505,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const variantAlsoNegotiates = (result, headers = {}) => ({
    statusCode: 506,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const insufficientStorage = (result, headers = {}) => ({
    statusCode: 507,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const bandwidthLimitExceeded = (result, headers = {}) => ({
    statusCode: 509,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const notExtended = (result, headers = {}) => ({
    statusCode: 510,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const networkAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 511,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

export const isContinue = (response) => {
    return response.statusCode === 100;
};

export const isSwitchingProtocols = (response) => {
    return response.statusCode === 101;
};

export const isProcessing = (response) => {
    return response.statusCode === 102;
};

export const isOk = (response) => {
    return response.statusCode === 200;
};

export const isCreated = (response) => {
    return response.statusCode === 201;
};

export const isAccepted = (response) => {
    return response.statusCode === 202;
};

export const isNonAuthoritativeInformation = (response) => {
    return response.statusCode === 203;
};

export const isNoContent = (response) => {
    return response.statusCode === 204;
};

export const isResetContent = (response) => {
    return response.statusCode === 205;
};

export const isPartialContent = (response) => {
    return response.statusCode === 206;
};

export const isMultiStatus = (response) => {
    return response.statusCode === 207;
};

export const isMultipleChoices = (response) => {
    return response.statusCode === 300;
};

export const isMovedPermanently = (response) => {
    return response.statusCode === 301;
};

export const isMovedTemporarily = (response) => {
    return response.statusCode === 302;
};

export const isSeeOther = (response) => {
    return response.statusCode === 303;
};

export const isNotModified = (response) => {
    return response.statusCode === 304;
};

export const isUseProxy = (response) => {
    return response.statusCode === 305;
};

export const isTemporaryRedirect = (response) => {
    return response.statusCode === 307;
};

export const isBadRequest = (response) => {
    return response.statusCode === 400;
};

export const isUnauthorized = (response) => {
    return response.statusCode === 401;
};

export const isPaymentRequired = (response) => {
    return response.statusCode === 402;
};

export const isForbidden = (response) => {
    return response.statusCode === 403;
};

export const isNotFound = (response) => {
    return response.statusCode === 404;
};

export const isMethodNotAllowed = (response) => {
    return response.statusCode === 405;
};

export const isNotAcceptable = (response) => {
    return response.statusCode === 406;
};

export const isProxyAuthenticationRequired = (response) => {
    return response.statusCode === 407;
};

export const isRequestTimeOut = (response) => {
    return response.statusCode === 408;
};

export const isConflict = (response) => {
    return response.statusCode === 409;
};

export const isGone = (response) => {
    return response.statusCode === 410;
};

export const isLengthRequired = (response) => {
    return response.statusCode === 411;
};

export const isPreconditionFailed = (response) => {
    return response.statusCode === 412;
};

export const isRequestEntityTooLarge = (response) => {
    return response.statusCode === 413;
};

export const isRequestUriTooLarge = (response) => {
    return response.statusCode === 414;
};

export const isUnsupportedMediaType = (response) => {
    return response.statusCode === 415;
};

export const isRequestedRangeNotSatisfiable = (response) => {
    return response.statusCode === 416;
};

export const isExpectationFailed = (response) => {
    return response.statusCode === 417;
};

export const isImATeapot = (response) => {
    return response.statusCode === 418;
};

export const isUnprocessableEntity = (response) => {
    return response.statusCode === 422;
};

export const isLocked = (response) => {
    return response.statusCode === 423;
};

export const isFailedDependency = (response) => {
    return response.statusCode === 424;
};

export const isUnorderedCollection = (response) => {
    return response.statusCode === 425;
};

export const isUpgradeRequired = (response) => {
    return response.statusCode === 426;
};

export const isPreconditionRequired = (response) => {
    return response.statusCode === 428;
};

export const isTooManyRequests = (response) => {
    return response.statusCode === 429;
};

export const isRequestHeaderFieldsTooLarge = (response) => {
    return response.statusCode === 431;
};

export const isInternalServerError = (response) => {
    return response.statusCode === 500;
};

export const isNotImplemented = (response) => {
    return response.statusCode === 501;
};

export const isBadGateway = (response) => {
    return response.statusCode === 502;
};

export const isServiceUnavailable = (response) => {
    return response.statusCode === 503;
};

export const isGatewayTimeOut = (response) => {
    return response.statusCode === 504;
};

export const isHttpVersionNotSupported = (response) => {
    return response.statusCode === 505;
};

export const isVariantAlsoNegotiates = (response) => {
    return response.statusCode === 506;
};

export const isInsufficientStorage = (response) => {
    return response.statusCode === 507;
};

export const isBandwidthLimitExceeded = (response) => {
    return response.statusCode === 509;
};

export const isNotExtended = (response) => {
    return response.statusCode === 510;
};

export const isNetworkAuthenticationRequired = (response) => {
    return response.statusCode === 511;
};