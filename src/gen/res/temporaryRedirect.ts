/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type TemporaryRedirectLambdaResponse = LambdaResponse<307>;

export function temporaryRedirect(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): TemporaryRedirectLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 307,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : '',
  };
}

export function isTemporaryRedirect(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 307;
}
