/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type NetworkAuthenticationRequiredLambdaResponse = LambdaResponse<511>;

export function networkAuthenticationRequired(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): NetworkAuthenticationRequiredLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 511,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isNetworkAuthenticationRequired(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 511;
}
