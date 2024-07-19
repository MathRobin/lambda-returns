/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type GoneLambdaResponse = LambdaResponse<410>;

export function gone(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): GoneLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 410,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isGone(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 410;
}
