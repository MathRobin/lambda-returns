/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type ExpectationFailedLambdaResponse = LambdaResponse<417>;

export function expectationFailed(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): ExpectationFailedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 417,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isExpectationFailed(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 417;
}
