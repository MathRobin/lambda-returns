module.exports.switchingProtocols = (result, headers = {}) => ({
    statusCode: 101,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.processing = (result, headers = {}) => ({
    statusCode: 102,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.ok = (result, headers = {}) => ({
    statusCode: 200,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.created = (result, headers = {}) => ({
    statusCode: 201,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.accepted = (result, headers = {}) => ({
    statusCode: 202,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.nonAuthoritativeInformation = (result, headers = {}) => ({
    statusCode: 203,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.noContent = (result, headers = {}) => ({
    statusCode: 204,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.resetContent = (result, headers = {}) => ({
    statusCode: 205,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.partialContent = (result, headers = {}) => ({
    statusCode: 206,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.multiStatus = (result, headers = {}) => ({
    statusCode: 207,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.multipleChoices = (result, headers = {}) => ({
    statusCode: 300,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.movedPermanently = (result, headers = {}) => ({
    statusCode: 301,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.movedTemporarily = (result, headers = {}) => ({
    statusCode: 302,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.seeOther = (result, headers = {}) => ({
    statusCode: 303,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.notModified = (result, headers = {}) => ({
    statusCode: 304,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.useProxy = (result, headers = {}) => ({
    statusCode: 305,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.temporaryRedirect = (result, headers = {}) => ({
    statusCode: 307,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.badRequest = (result, headers = {}) => ({
    statusCode: 400,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.unauthorized = (result, headers = {}) => ({
    statusCode: 401,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.paymentRequired = (result, headers = {}) => ({
    statusCode: 402,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.forbidden = (result, headers = {}) => ({
    statusCode: 403,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.notFound = (result, headers = {}) => ({
    statusCode: 404,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.methodNotAllowed = (result, headers = {}) => ({
    statusCode: 405,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.notAcceptable = (result, headers = {}) => ({
    statusCode: 406,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.proxyAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 407,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.requestTimeOut = (result, headers = {}) => ({
    statusCode: 408,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.conflict = (result, headers = {}) => ({
    statusCode: 409,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.gone = (result, headers = {}) => ({
    statusCode: 410,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.lengthRequired = (result, headers = {}) => ({
    statusCode: 411,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.preconditionFailed = (result, headers = {}) => ({
    statusCode: 412,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.requestEntityTooLarge = (result, headers = {}) => ({
    statusCode: 413,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.requestUriTooLarge = (result, headers = {}) => ({
    statusCode: 414,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.unsupportedMediaType = (result, headers = {}) => ({
    statusCode: 415,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.requestedRangeNotSatisfiable = (result, headers = {}) => ({
    statusCode: 416,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.expectationFailed = (result, headers = {}) => ({
    statusCode: 417,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.imATeapot = (result, headers = {}) => ({
    statusCode: 418,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.unprocessableEntity = (result, headers = {}) => ({
    statusCode: 422,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.locked = (result, headers = {}) => ({
    statusCode: 423,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.failedDependency = (result, headers = {}) => ({
    statusCode: 424,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.unorderedCollection = (result, headers = {}) => ({
    statusCode: 425,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.upgradeRequired = (result, headers = {}) => ({
    statusCode: 426,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.preconditionRequired = (result, headers = {}) => ({
    statusCode: 428,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.tooManyRequests = (result, headers = {}) => ({
    statusCode: 429,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.requestHeaderFieldsTooLarge = (result, headers = {}) => ({
    statusCode: 431,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.internalServerError = (result, headers = {}) => ({
    statusCode: 500,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.notImplemented = (result, headers = {}) => ({
    statusCode: 501,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.badGateway = (result, headers = {}) => ({
    statusCode: 502,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.serviceUnavailable = (result, headers = {}) => ({
    statusCode: 503,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.gatewayTimeOut = (result, headers = {}) => ({
    statusCode: 504,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.httpVersionNotSupported = (result, headers = {}) => ({
    statusCode: 505,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.variantAlsoNegotiates = (result, headers = {}) => ({
    statusCode: 506,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.insufficientStorage = (result, headers = {}) => ({
    statusCode: 507,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.bandwidthLimitExceeded = (result, headers = {}) => ({
    statusCode: 509,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.notExtended = (result, headers = {}) => ({
    statusCode: 510,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.networkAuthenticationRequired = (result, headers = {}) => ({
    statusCode: 511,
    headers,
    body: result ? typeof result === 'string' ? result : JSON.stringify(result) : null,
});

module.exports.isContinue = (response) => {
    return response.statusCode === 100;
};

module.exports.isSwitchingProtocols = (response) => {
    return response.statusCode === 101;
};

module.exports.isProcessing = (response) => {
    return response.statusCode === 102;
};

module.exports.isOk = (response) => {
    return response.statusCode === 200;
};

module.exports.isCreated = (response) => {
    return response.statusCode === 201;
};

module.exports.isAccepted = (response) => {
    return response.statusCode === 202;
};

module.exports.isNonAuthoritativeInformation = (response) => {
    return response.statusCode === 203;
};

module.exports.isNoContent = (response) => {
    return response.statusCode === 204;
};

module.exports.isResetContent = (response) => {
    return response.statusCode === 205;
};

module.exports.isPartialContent = (response) => {
    return response.statusCode === 206;
};

module.exports.isMultiStatus = (response) => {
    return response.statusCode === 207;
};

module.exports.isMultipleChoices = (response) => {
    return response.statusCode === 300;
};

module.exports.isMovedPermanently = (response) => {
    return response.statusCode === 301;
};

module.exports.isMovedTemporarily = (response) => {
    return response.statusCode === 302;
};

module.exports.isSeeOther = (response) => {
    return response.statusCode === 303;
};

module.exports.isNotModified = (response) => {
    return response.statusCode === 304;
};

module.exports.isUseProxy = (response) => {
    return response.statusCode === 305;
};

module.exports.isTemporaryRedirect = (response) => {
    return response.statusCode === 307;
};

module.exports.isBadRequest = (response) => {
    return response.statusCode === 400;
};

module.exports.isUnauthorized = (response) => {
    return response.statusCode === 401;
};

module.exports.isPaymentRequired = (response) => {
    return response.statusCode === 402;
};

module.exports.isForbidden = (response) => {
    return response.statusCode === 403;
};

module.exports.isNotFound = (response) => {
    return response.statusCode === 404;
};

module.exports.isMethodNotAllowed = (response) => {
    return response.statusCode === 405;
};

module.exports.isNotAcceptable = (response) => {
    return response.statusCode === 406;
};

module.exports.isProxyAuthenticationRequired = (response) => {
    return response.statusCode === 407;
};

module.exports.isRequestTimeOut = (response) => {
    return response.statusCode === 408;
};

module.exports.isConflict = (response) => {
    return response.statusCode === 409;
};

module.exports.isGone = (response) => {
    return response.statusCode === 410;
};

module.exports.isLengthRequired = (response) => {
    return response.statusCode === 411;
};

module.exports.isPreconditionFailed = (response) => {
    return response.statusCode === 412;
};

module.exports.isRequestEntityTooLarge = (response) => {
    return response.statusCode === 413;
};

module.exports.isRequestUriTooLarge = (response) => {
    return response.statusCode === 414;
};

module.exports.isUnsupportedMediaType = (response) => {
    return response.statusCode === 415;
};

module.exports.isRequestedRangeNotSatisfiable = (response) => {
    return response.statusCode === 416;
};

module.exports.isExpectationFailed = (response) => {
    return response.statusCode === 417;
};

module.exports.isImATeapot = (response) => {
    return response.statusCode === 418;
};

module.exports.isUnprocessableEntity = (response) => {
    return response.statusCode === 422;
};

module.exports.isLocked = (response) => {
    return response.statusCode === 423;
};

module.exports.isFailedDependency = (response) => {
    return response.statusCode === 424;
};

module.exports.isUnorderedCollection = (response) => {
    return response.statusCode === 425;
};

module.exports.isUpgradeRequired = (response) => {
    return response.statusCode === 426;
};

module.exports.isPreconditionRequired = (response) => {
    return response.statusCode === 428;
};

module.exports.isTooManyRequests = (response) => {
    return response.statusCode === 429;
};

module.exports.isRequestHeaderFieldsTooLarge = (response) => {
    return response.statusCode === 431;
};

module.exports.isInternalServerError = (response) => {
    return response.statusCode === 500;
};

module.exports.isNotImplemented = (response) => {
    return response.statusCode === 501;
};

module.exports.isBadGateway = (response) => {
    return response.statusCode === 502;
};

module.exports.isServiceUnavailable = (response) => {
    return response.statusCode === 503;
};

module.exports.isGatewayTimeOut = (response) => {
    return response.statusCode === 504;
};

module.exports.isHttpVersionNotSupported = (response) => {
    return response.statusCode === 505;
};

module.exports.isVariantAlsoNegotiates = (response) => {
    return response.statusCode === 506;
};

module.exports.isInsufficientStorage = (response) => {
    return response.statusCode === 507;
};

module.exports.isBandwidthLimitExceeded = (response) => {
    return response.statusCode === 509;
};

module.exports.isNotExtended = (response) => {
    return response.statusCode === 510;
};

module.exports.isNetworkAuthenticationRequired = (response) => {
    return response.statusCode === 511;
};