/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type LockedLambdaResponse = LambdaResponse<423>;

export function locked(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): LockedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 423,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isLocked(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 423;
}
