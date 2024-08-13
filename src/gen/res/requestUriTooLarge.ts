/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type RequestUriTooLargeLambdaResponse = LambdaResponse<414>;

export function requestUriTooLarge(
  result?: string | object,
  headers: HttpHeaders = {},
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
      : ''
  };
}

export function isRequestUriTooLarge(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 414;
}
