/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NoContentLambdaResponse = LambdaResponse<204>;

export function noContent(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NoContentLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 204,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNoContent(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 204;
}
