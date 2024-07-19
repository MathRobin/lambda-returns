/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type UnsupportedMediaTypeLambdaResponse = LambdaResponse<415>;

export function unsupportedMediaType(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): UnsupportedMediaTypeLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 415,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isUnsupportedMediaType(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 415;
}
