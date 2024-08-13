/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NotExtendedLambdaResponse = LambdaResponse<510>;

export function notExtended(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NotExtendedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 510,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isNotExtended(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 510;
}
