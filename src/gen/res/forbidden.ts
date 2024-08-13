/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ForbiddenLambdaResponse = LambdaResponse<403>;

export function forbidden(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ForbiddenLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 403,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isForbidden(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 403;
}
