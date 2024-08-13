/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type RequestHeaderFieldsTooLargeLambdaResponse = LambdaResponse<431>;

export function requestHeaderFieldsTooLarge(
  result?: string | object,
  headers: HttpHeaders = {},
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
      : ''
  };
}

export function isRequestHeaderFieldsTooLarge(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 431;
}
