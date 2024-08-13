/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type MethodNotAllowedLambdaResponse = LambdaResponse<405>;

export function methodNotAllowed(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): MethodNotAllowedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 405,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isMethodNotAllowed(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 405;
}
