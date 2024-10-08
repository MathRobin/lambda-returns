/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type TooManyRequestsLambdaResponse = LambdaResponse<429>;

export function tooManyRequests(
  result?: string | object,
  headers: HttpHeaders = {},
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
      : '',
  };
}

export function isTooManyRequests(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 429;
}
