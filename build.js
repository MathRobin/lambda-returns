import fs from 'fs';

const codes = {
  // can't be exported as it uses a reserved word
  // "continue": 100,
  switchingProtocols: 101,
  processing: 102,
  ok: 200,
  created: 201,
  accepted: 202,
  nonAuthoritativeInformation: 203,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  multiStatus: 207,
  multipleChoices: 300,
  movedPermanently: 301,
  movedTemporarily: 302,
  seeOther: 303,
  notModified: 304,
  useProxy: 305,
  temporaryRedirect: 307,
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  notAcceptable: 406,
  proxyAuthenticationRequired: 407,
  requestTimeOut: 408,
  conflict: 409,
  gone: 410,
  lengthRequired: 411,
  preconditionFailed: 412,
  requestEntityTooLarge: 413,
  requestUriTooLarge: 414,
  unsupportedMediaType: 415,
  requestedRangeNotSatisfiable: 416,
  expectationFailed: 417,
  imATeapot: 418,
  unprocessableEntity: 422,
  locked: 423,
  failedDependency: 424,
  unorderedCollection: 425,
  upgradeRequired: 426,
  preconditionRequired: 428,
  tooManyRequests: 429,
  requestHeaderFieldsTooLarge: 431,
  internalServerError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeOut: 504,
  httpVersionNotSupported: 505,
  variantAlsoNegotiates: 506,
  insufficientStorage: 507,
  bandwidthLimitExceeded: 509,
  notExtended: 510,
  networkAuthenticationRequired: 511,
};

const exportsEsm = [];
const exportsCjs = [];

Object.entries(codes).forEach(([message, code]) => {
  exportsEsm.push(`export const ${message} = (result, headers = {}) => ({
    statusCode: ${code},
    headers,
    body: result ? JSON.stringify(result) : null,
  });`);

  exportsCjs.push(`module.exports.${message} = (result, headers = {}) => ({
    statusCode: ${code},
    headers,
    body: result ? JSON.stringify(result) : null,
  });`);
});

fs.writeFile('./index.esm.js', exportsEsm.join('\n\n'), () => {
  console.log('Version ES Module generated');
});
fs.writeFile('./index.cjs', exportsCjs.join('\n\n'), () => {
  console.log('Version CommonJs generated');
});
