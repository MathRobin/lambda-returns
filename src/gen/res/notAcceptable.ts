/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NotAcceptableLambdaResponse = LambdaResponse<406>;

export function notAcceptable(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotAcceptableLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 406,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNotAcceptable(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 406;
}
