/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ImATeapotLambdaResponse = LambdaResponse<418>;

export function imATeapot(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ImATeapotLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 418,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isImATeapot(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 418;
}
