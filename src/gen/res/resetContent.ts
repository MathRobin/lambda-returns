/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ResetContentLambdaResponse = LambdaResponse<205>;

export function resetContent(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ResetContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 205,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isResetContent(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 205;
}
