/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UnauthorizedLambdaResponse = LambdaResponse<401>;

export function unauthorized(
  result?: string | object,
  headers: HttpHeaders = {},
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
      : ''
  };
}

export function isUnauthorized(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 401;
}
