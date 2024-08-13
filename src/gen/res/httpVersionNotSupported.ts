/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type HttpVersionNotSupportedLambdaResponse = LambdaResponse<505>;

export function httpVersionNotSupported(
  result?: string | object,
  headers: HttpHeaders = {},
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
      : '',
  };
}

export function isHttpVersionNotSupported(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 505;
}
