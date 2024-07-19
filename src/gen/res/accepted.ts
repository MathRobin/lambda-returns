/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 * GENERATED USING 'src/scripts/res/gen.ts'
 */

import { LambdaResponse } from '@/src/LambdaResponse';
import { HttpHeaders } from '@/src/HttpHeaders';
import { serializeBody } from '@/src/serialization';

export type AcceptedLambdaResponse = LambdaResponse<202>;

export function accepted(
  result?: string | object,
  headers: HttpHeaders = {},
  isAlreadyBase64: boolean = false
): AcceptedLambdaResponse {
  return {
    isBase64Encoded: isAlreadyBase64,
    statusCode: 202,
    headers,
    body: result
      ? typeof result === 'string'
        ? result
        : serializeBody(result)
      : null,
  };
}

export function isAccepted(
  response?: Partial<LambdaResponse<number>>
): boolean {
  return response?.statusCode === 202;
}
