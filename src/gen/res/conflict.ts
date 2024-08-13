/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ConflictLambdaResponse = LambdaResponse<409>;

export function conflict(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ConflictLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 409,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isConflict(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 409;
}