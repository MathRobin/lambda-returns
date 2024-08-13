/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NotImplementedLambdaResponse = LambdaResponse<501>;

export function notImplemented(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotImplementedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 501,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : ''
  };
}

export function isNotImplemented(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 501;
}
