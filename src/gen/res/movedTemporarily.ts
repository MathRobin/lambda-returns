/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type MovedTemporarilyLambdaResponse = LambdaResponse<302>;

export function movedTemporarily(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): MovedTemporarilyLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 302,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isMovedTemporarily(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 302;
}
